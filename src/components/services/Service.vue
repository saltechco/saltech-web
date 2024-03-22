<script lang="ts" setup>
import { onMounted, ref } from 'vue'
import { usePrimeVue } from 'primevue/config'
import { useToast } from 'primevue/usetoast'
import axios from 'axios'

const props = defineProps({
  serviceName: String,
  serviceTitle: String
})

const requestServiceName = props.serviceName

const toast = useToast()
const $primevue = usePrimeVue()

const termsAndConditionsRead = ref(false)
const startRequestRegistration = ref(false)
const isGeneratingTrackingCode = ref(false)
const isTrackingCodeGenerated = ref(false)
const generateTrackingCodeResult = ref(false)
const requestUserFullName = ref(null)
const requestUserEmail = ref(null)
const requestUserPhone = ref(null)
const requestProjectDescription = ref(null)
const requestTrackingCode = ref(null)

const requestFormName = ref(null)

const active = ref(0)

const fileSelected = ref(false)
const fileUploaded = ref(false)
const fileCouldntUpload = ref(false)
const fileUploadCleared = ref(true)
const totalSize = ref(0)
const totalSizePercent = ref(0)
const files = ref([])

const onRemoveTemplatingFile = (file, removeFileCallback, index) => {
  removeFileCallback(index)
  files.value = []
  totalSize.value -= parseInt(formatSize(file.size))
  totalSizePercent.value = totalSize.value / 10
  fileUploadCleared.value = true
  fileSelected.value = false
  fileCouldntUpload.value = false
  fileUploaded.value = false
}

const onClearTemplatingUpload = (clear) => {
  clear()
  fileUploadCleared.value = true
  fileSelected.value = false
  fileCouldntUpload.value = false
  fileUploaded.value = false
  totalSize.value = 0
  totalSizePercent.value = 0
}

const onSelectedFiles = (event) => {
  fileUploadCleared.value = false
  files.value = event.files
  files.value.forEach((file) => {
    totalSize.value += parseInt(formatSize(file.size))
  })
  if (files.value.length == 0) {
    toast.add({
      severity: 'error',
      summary: 'خطا',
      detail: 'فایل باید حداکثر 1 مگابایت و عکس باشد!',
      life: 3000
    })
  } else {
    fileSelected.value = true
  }
}

const uploadEvent = (callback) => {
  totalSizePercent.value = totalSize.value / 10
  if (!fileUploaded.value) {
    fileCouldntUpload.value = true
  }
  callback()
}

const onTemplatedUpload = () => {
  fileUploaded.value = true
  fileCouldntUpload.value = false
  toast.add({
    severity: 'success',
    summary: 'نتیجه آپلود',
    detail: 'فایل فرم درخواست با موفقیت آپلود شد!',
    life: 3000
  })
}

const formatSize = (bytes) => {
  const k = 1024
  const dm = 3
  const sizes = $primevue.config.locale.fileSizeTypes

  if (bytes === 0) {
    return `0 ${sizes[0]}`
  }

  const i = Math.floor(Math.log(bytes) / Math.log(k))
  const formattedSize = parseFloat((bytes / Math.pow(k, i)).toFixed(dm))

  return `${formattedSize} ${sizes[i]}`
}

function start() {
  if (termsAndConditionsRead.value) {
    startRequestRegistration.value = true
    window.scrollTo(0, 30)
    document.title = 'صالتک • ثبت درخواست خدمت'
  } else {
    toast.removeAllGroups()
    toast.add({
      severity: 'error',
      summary: 'خطا',
      detail: 'لطفاً ابتدا قوانین را مورد مطالعه و پذیرش قرار دهید.',
      life: 3000,
      closable: false
    })
  }
}

function downloadForm() {
  window.open('/ServiceRegistrationForm.pdf', '_blank')
}

function generateTrackingCode() {
  setTimeout(() => {
    sendGenerateTrackingRequest()
  }, 5000)
}

async function sendGenerateTrackingRequest() {
  try {
    const resp = await axios.post('/api/work/genTrackingCode', {
      formName: requestFormName,
      fullName: requestUserFullName,
      phoneNumber: requestUserPhone,
      email: requestUserEmail,
      projectDescription: requestProjectDescription,
      serviceName: requestServiceName
    })
    requestTrackingCode.value = resp.data.trackingCode
    generateTrackingCodeResult.value = !!requestTrackingCode.value
  } catch (error) {
    console.log(error)
    generateTrackingCodeResult.value = false
  }
  isGeneratingTrackingCode.value = false
  isTrackingCodeGenerated.value = true
}

function onNextRequested(callback) {
  callback()
  if (
    fileUploaded.value &&
    requestUserFullName &&
    requestFormName &&
    requestProjectDescription &&
    requestUserPhone &&
    requestUserEmail
  ) {
    isGeneratingTrackingCode.value = true
    generateTrackingCode()
  }
  window.scrollTo(0, 30)
}

function onPreviousRequested(callback) {
  callback()
  window.scrollTo(0, 30)
}

function validateEmail() {
  if (/^\w+([\.-]?\w+)*@\w+([\.-]?\w+)*(\.\w{2,3})+$/.test(this.email)) {
    this.msg['email'] = 'Please enter a valid email address'
  } else {
    this.msg['email'] = ''
  }
}

onMounted(() => {
  window.scrollTo(0, 0)
})
</script>

<template>
  <Toast />
  <div class="container">
    <div v-if="!startRequestRegistration" class="request-container">
      <h1 class="title">{{ props.serviceTitle }}</h1>
      <div class="description">
        <slot name="default"></slot>
      </div>
      <div class="spacer" />
      <Fieldset class="order-request" legend="نحوه درخواست و انجام سفارش">
        <p class="m-0 order-request-text">
          ما از شما یک سری از اطلاعات که برای مثال، برای ساخت اپلیکیشن نیاز است، دریافت می کنیم.<br />
          اطلاعاتی نظیر مشخصات کامل شما و نوع اپلیکیشن، شرح قابلیت هایی که باید داشته باشد، قیمت
          پیشنهادی شما برای انجام، مدت زمان پیشنهادی برای انجام این فرایند<br />
          سپس این اطلاعات را به کارشناسان ارسال می کنیم تا بررسی کنند و نظر خود و قیمت پیشنهادی و
          مدت زمان پیشنهادی آنها هم دریافت کنیم؛<br />
          ضمناً این بررسی ممکن است تا نهایت 2 تا 3 روز کاری به طول بیانجامد<br />
          سپس قیمت و مدت زمان توافقی را از شما استعلام می کنیم و قراردادی را شامل این اطلاعات به شما
          می دهیم؛<br />
          شما لطف می کنید و این قرارداد را دریافت و امضاء می کنید؛ سپس آن را ارسال کرده و کد رهگیری
          را دریافت کنید.
          <br />
          پس از آن ما کار خود را تا نهایت 1 روز کاری بعد، آغاز می کنیم؛<br />
          ضمناً این را هم در نظر داشته باشید که به علت سفارشات بالا، ممکن است کمی این فرایند زمان بر
          باشد!<br />
          شما می توانید با این کد رهگیری، به سامانه رهگیری سفارشات مراجعه کنید و از آخرین وضعیت
          سفارش خود مطلع شوید.<br />
          اگر مشکلی هم بود، به ما تیکت دهید یا در سامانه پشتیبانی آنلاین، مطرح کنید.
        </p>
      </Fieldset>
      <div id="order-request-button-layout">
        <div id="order-request-terms-ok-layout">
          <Checkbox v-model="termsAndConditionsRead" binary inputId="order-request-terms-ok" />
          <label id="order-request-terms-ok-label" for="order-request-terms-ok"
            >&nbsp;&nbsp;&nbsp;&nbsp;<router-link style="color: var(--primary-500)" to="/terms"
              >قوانین و مقررات
            </router-link>
            را مطالعه کرده و آنها را به صورت کامل می پذیرم.</label
          >
        </div>
        <div class="spacer" />
        <Button id="order-request-button" label="شروع ثبت درخواست" type="button" @click="start" />
      </div>
    </div>
    <div v-else class="registration-container">
      <div class="card">
        <h1 class="order-registration-title">ثبت درخواست خدمت</h1>
        <div class="order-card-spacer" />
        <div class="flex justify-content-center">
          <Stepper v-model:activeStep="active">
            <StepperPanel>
              <template #header="{ index }">
                <p
                  class="step-item bg-transparent border-none inline-flex flex-column gap-2 align-items-center justify-content-center"
                >
                  <span
                    :class="[
                      'border-round border-2 w-3rem h-3rem inline-flex align-items-center justify-content-center',
                      {
                        'bg-primary border-primary': index <= active,
                        'surface-border': index > active
                      }
                    ]"
                  >
                    <i class="pi pi-user-edit" />
                  </span>
                  <span
                    :class="[
                      {
                        'text-primary tab-header-title-selected': index <= active,
                        'surface-border': index > active
                      }
                    ]"
                    >تکمیل مشخصات</span
                  >
                </p>
              </template>
              <template #content="{ nextCallback }">
                <div
                  class="flex flex-column gap-2 mx-auto"
                  style="min-height: 16rem; max-width: 50rem"
                >
                  <div class="text-center mt-3 mb-3 text-xl">
                    برای ادامه، لطفاً اطلاعات خواسته شده را وارد کنید.<br />
                    شرح پروژه، شرح درخواستی است که می خواهید به ما بدهید.<br />
                    مثلاً بگویید میخواهید چگونه باشد، چه قابلیت هایی داشته باشد،<br />
                    برای چه زمینه هایی باشد و ...
                  </div>
                  <div class="flex flex-wrap justify-content-center gap-3">
                    <div class="field p-fluid">
                      <FloatLabel id="user-full-name-layout">
                        <InputText id="user-full-name" v-model="requestUserFullName" required />
                        <label for="user-full-name">نام و نام خانوادگی</label>
                      </FloatLabel>
                      <div
                        id="user-email-phone-number-layout"
                        class="flex flex-row justify-content-center align-items-center mt-5"
                      >
                        <FloatLabel id="user-email-layout">
                          <InputText
                            id="user-email"
                            v-model="requestUserEmail"
                            required
                            type="email"
                            @blur="validateEmail"
                          />
                          <label for="user-email">ایمیل</label>
                        </FloatLabel>
                        <div class="mx-2" />
                        <FloatLabel id="user-phone-number-layout">
                          <InputText
                            id="user-phone-number"
                            v-model="requestUserPhone"
                            aria-placeholder="09123456789"
                            placeholder="09123456789"
                            required
                            type="tel"
                          />
                          <label for="user-phone-number">شماره موبایل</label>
                        </FloatLabel>
                      </div>
                      <FloatLabel id="project-description-layout" class="mt-5">
                        <Textarea
                          id="project-description"
                          v-model="requestProjectDescription"
                          cols="45"
                          required
                          rows="5"
                        />
                        <label for="project-description">شرح پروژه</label>
                      </FloatLabel>
                    </div>
                  </div>
                </div>
                <div class="flex pt-4 justify-content-end">
                  <Button
                    :disabled="
                      !(
                        serviceName &&
                        requestUserFullName &&
                        requestUserPhone &&
                        requestUserEmail &&
                        requestProjectDescription
                      )
                    "
                    icon="pi pi-arrow-left"
                    label="بعدی"
                    style="direction: ltr"
                    @click="onNextRequested(nextCallback)"
                  />
                </div>
              </template>
            </StepperPanel>
            <StepperPanel>
              <template #header="{ index }">
                <p
                  class="bg-transparent border-none inline-flex flex-column gap-2 align-items-center justify-content-center"
                >
                  <span
                    :class="[
                      'border-round border-2 w-3rem h-3rem inline-flex align-items-center justify-content-center',
                      {
                        'bg-primary border-primary': index <= active,
                        'surface-border': index > active
                      }
                    ]"
                  >
                    <i class="pi pi-file-edit" />
                  </span>
                  <span
                    :class="[
                      {
                        'text-primary tab-header-title-selected': index <= active,
                        'surface-border': index > active
                      }
                    ]"
                    >تکمیل فرم</span
                  >
                </p>
              </template>
              <template #content="{ prevCallback, nextCallback }">
                <div
                  class="flex flex-column gap-2 mx-auto"
                  style="min-height: 16rem; max-width: 20rem"
                >
                  <div class="text-center mt-3 mb-3 text-xl">
                    فرم درخواست را دریافت و تکمیل کنید؛<br />سپس ارسال کنید و به مرحله بعد بروید.<br />
                    <span style="color: #c93d82">لطفاً در آپلود فایل دقت کنید!</span>
                  </div>
                  <div class="field p-fluid">
                    <Button
                      icon="pi pi-download"
                      label="دانلود فرم درخواست"
                      @click="downloadForm"
                    />
                  </div>
                  <div class="field p-fluid">
                    <FileUpload
                      :max-file-size="1048576"
                      accept="image/*"
                      invalid-file-size-message="حجم فایل بیش از اندازه 1 مگابایت بود!"
                      invalid-file-type-message="فایل باید عکس باشد!"
                      name="formUpload"
                      url="/api/work/upload"
                      @select="onSelectedFiles"
                      @upload="onTemplatedUpload($event)"
                    >
                      <template #header="{ chooseCallback, uploadCallback, clearCallback, files }">
                        <div
                          class="flex flex-wrap justify-content-between align-items-center flex-1 gap-2"
                        >
                          <div class="flex gap-3">
                            <Button
                              v-if="fileSelected && !fileCouldntUpload && !fileUploaded"
                              :disabled="!files || files.length === 0"
                              class="px-2"
                              icon="pi pi-cloud-upload"
                              icon-pos="right"
                              label="آپلود"
                              rounded
                              severity="success"
                              style="direction: ltr"
                              text
                              @click="uploadEvent(uploadCallback)"
                            ></Button>
                            <Button
                              v-if="fileSelected && !fileCouldntUpload && !fileUploaded"
                              :disabled="(!files || files.length === 0) && !fileCouldntUpload"
                              class="px-2"
                              icon="pi pi-times"
                              icon-pos="right"
                              label="حذف"
                              rounded
                              severity="danger"
                              style="direction: ltr"
                              text
                              @click="onClearTemplatingUpload(clearCallback)"
                            ></Button>
                            <Button
                              v-if="!fileSelected"
                              class="px-2"
                              icon="pi pi-file"
                              icon-pos="right"
                              label="انتخاب"
                              rounded
                              style="direction: ltr"
                              text
                              @click="chooseCallback()"
                            ></Button>
                          </div>
                        </div>
                      </template>
                      <template
                        #content="{
                          files,
                          uploadedFiles,
                          removeUploadedFileCallback,
                          removeFileCallback
                        }"
                      >
                        <input
                          v-for="(file, _) of uploadedFiles"
                          ref="requestFormName"
                          :value="file.name"
                          aria-hidden="true"
                          hidden
                        />

                        <div v-if="files.length == 0 && fileUploaded && !fileCouldntUpload">
                          <Badge
                            class="upload-file-status"
                            severity="success"
                            value="فایل بارگذاری شد"
                          />
                        </div>

                        <div v-else-if="files.length == 0 && !fileUploaded && fileCouldntUpload">
                          <Badge
                            class="upload-file-status"
                            severity="danger"
                            value="فایل بارگذاری نشد!"
                          />
                          <div
                            class="flex flex-wrap p-0 sm:p-2 gap-2 align-items-center justify-content-center"
                          >
                            <div
                              v-for="(file, _) of uploadedFiles"
                              :key="file.name + file.type + file.size"
                              class="card m-0 px-6 flex flex-column border-1 surface-border align-items-center gap-3"
                            >
                              <Avatar class="mr-2" icon="pi pi-file" size="xlarge" />
                              <span class="font-semibold upload-file-name">{{ file.name }}</span>
                              <Button
                                v-if="fileSelected"
                                :disabled="
                                  (!uploadedFiles || uploadedFiles.length === 0) &&
                                  !fileCouldntUpload
                                "
                                class="px-2"
                                icon="pi pi-times"
                                icon-pos="right"
                                label="حذف"
                                rounded
                                severity="danger"
                                style="direction: ltr"
                                text
                                @click="onClearTemplatingUpload(removeUploadedFileCallback)"
                              ></Button>
                            </div>
                          </div>
                        </div>

                        <div v-else-if="files.length > 0 && !fileUploaded && !fileCouldntUpload">
                          <Badge
                            class="upload-file-status"
                            severity="warning"
                            value="در انتظار بارگذاری"
                          />
                          <div
                            class="flex flex-wrap p-0 sm:p-2 gap-2 align-items-center justify-content-center"
                          >
                            <div
                              v-for="(file, _) of files"
                              :key="file.name + file.type + file.size"
                              class="card m-0 px-6 flex flex-column border-1 surface-border align-items-center gap-3"
                            >
                              <Avatar class="mr-2" icon="pi pi-file" size="xlarge" />
                              <span class="font-semibold upload-file-name">{{ file.name }}</span>
                            </div>
                          </div>
                        </div>

                        <div
                          v-else-if="
                            uploadedFiles.length > 0 &&
                            !fileUploaded &&
                            !fileCouldntUpload &&
                            !fileUploadCleared
                          "
                        >
                          <ProgressBar class="upload-bar w-full" mode="indeterminate"></ProgressBar>
                          <Badge
                            class="upload-file-status"
                            severity="info"
                            value="در حال بارگذاری ..."
                          />
                          <div
                            class="flex flex-wrap p-0 sm:p-2 gap-2 align-items-center justify-content-center"
                          >
                            <div
                              v-for="(file, _) of uploadedFiles"
                              :key="file.name + file.type + file.size"
                              class="card m-0 px-6 flex flex-column border-1 surface-border align-items-center gap-3"
                            >
                              <Avatar class="mr-2" icon="pi pi-file" size="xlarge" />
                              <span class="font-semibold upload-file-name">{{ file.name }}</span>
                            </div>
                          </div>
                        </div>
                      </template>
                      <template #empty>
                        <div
                          v-if="!fileUploaded && !fileCouldntUpload && fileUploadCleared"
                          class="flex align-items-center justify-content-center flex-column"
                        >
                          <i class="pi pi-cloud-upload text-7xl text-400 border-400" />
                          <p class="mt-3 mb-0 upload-text text-1xl text-400 border-400">
                            اینجا رها یا انتخاب کنید.
                          </p>
                        </div>
                      </template>
                    </FileUpload>
                  </div>
                </div>
                <div class="flex pt-4 justify-content-between">
                  <Button
                    icon="pi pi-arrow-right"
                    icon-pos="right"
                    label="قبلی"
                    severity="secondary"
                    style="direction: ltr"
                    @click="onPreviousRequested(prevCallback)"
                  />
                  <Button
                    :disabled="!(fileUploaded && requestFormName)"
                    icon="pi pi-arrow-left"
                    label="بعدی"
                    style="direction: ltr"
                    @click="onNextRequested(nextCallback)"
                  />
                </div>
              </template>
            </StepperPanel>
            <StepperPanel>
              <template #header="{ index }">
                <p
                  class="step-item bg-transparent border-none inline-flex flex-column gap-2 align-items-center justify-content-center"
                >
                  <span
                    :class="[
                      'border-round border-2 w-3rem h-3rem inline-flex align-items-center justify-content-center',
                      {
                        'bg-primary border-primary': index <= active,
                        'surface-border': index > active
                      }
                    ]"
                  >
                    <i class="pi pi-check" />
                  </span>
                  <span
                    :class="[
                      {
                        'text-primary tab-header-title-selected': index <= active,
                        'surface-border': index > active
                      }
                    ]"
                    >صدور کد رهگیری</span
                  >
                </p>
              </template>
              <template #content="{ prevCallback }">
                <div
                  v-if="isGeneratingTrackingCode"
                  class="flex flex-column gap-2 mx-auto justify-content-center align-items-center"
                  style="min-height: 16rem; max-width: 24rem"
                >
                  <div class="text-center mt-2 mb-3 text-xl font-semibold tracking-code-gen-text">
                    در حال صدور کد رهگیری ...
                  </div>
                  <ProgressBar class="w-8 mb-2 loading-bar" mode="indeterminate"></ProgressBar>
                </div>
                <div
                  v-else-if="isTrackingCodeGenerated && generateTrackingCodeResult"
                  class="flex flex-column gap-2 mx-auto justify-content-center align-items-center"
                  style="min-height: 16rem; max-width: 24rem"
                >
                  <span class="w-8 mb-2 pi pi-check-circle tracking-code-gen-done-icon"></span>
                  <div
                    class="text-center mt-2 mb-3 text-xl font-semibold tracking-code-gen-done-text"
                  >
                    کد رهگیری صادر شد.<br />
                    کد رهگیری شما: {{ requestTrackingCode }}
                  </div>
                  <div class="text-center mb-3 text-lg">این کد، همچنین برای شما ایمیل شده است.</div>
                </div>
                <div
                  v-else-if="isTrackingCodeGenerated && !generateTrackingCodeResult"
                  class="flex flex-column gap-2 mx-auto justify-content-center align-items-center"
                  style="min-height: 16rem; max-width: 24rem"
                >
                  <span class="w-8 mb-2 pi pi-times-circle tracking-code-gen-failed-icon"></span>
                  <div
                    class="text-center mt-2 mb-3 text-xl font-semibold tracking-code-gen-failed-text"
                  >
                    نتوانست کد رهگیری را ایجاد کند!<br />
                    لطفاً در فرصتی دیگر مجدداً امتحان کنید.
                  </div>
                </div>
                <div class="flex pt-4 justify-content-between">
                  <Button
                    icon="pi pi-arrow-right"
                    icon-pos="right"
                    label="قبلی"
                    severity="secondary"
                    style="direction: ltr"
                    @click="onPreviousRequested(prevCallback)"
                  />
                </div>
              </template>
            </StepperPanel>
          </Stepper>
        </div>
      </div>
      <div class="spacer" />
    </div>
  </div>
</template>

<style scoped>
* {
  direction: rtl;
}

.container {
  width: 100%;
  padding: 4rem 2rem;
}

.request-container {
  text-align: center;
}

.title {
  font-family: 'Peyda Black', sans-serif;
  font-size: clamp(1rem, 3vw, 2.25rem);
}

.description {
  font-family: 'Peyda Medium', sans-serif;
  font-size: clamp(1rem, 1.4vw, 2rem);
  margin: 3rem 2.5rem 0;
  line-height: 3rem;
}

.order-request {
  text-align: justify;
}

.order-request-text {
  text-align: justify;
  font-family: 'Peyda Regular', sans-serif;
  font-size: clamp(1rem, 1.1vw, 2rem);
  line-height: 2rem;
}

.order-request-form {
  margin-top: 3rem;
}

#order-request-button-layout {
  margin: 3rem;
  display: flex;
  flex-wrap: wrap;
  align-items: center;
}

#order-request-button {
  margin-right: auto;
}

#order-request-terms-ok-label {
  font-family: 'Peyda Medium', sans-serif;
  cursor: pointer;
}

.p-stepper {
  flex-basis: 40rem;
}

.card {
  background: white !important;
  border: 1px solid #e7e7e7;
}

.order-registration-title {
  font-family: 'Peyda Black', sans-serif;
  text-align: center;
}

.order-card-spacer {
  margin-top: 1rem;
}

.tab-header-title-selected {
  font-family: 'Peyda Bold', sans-serif;
}

.upload-text {
  font-family: 'Peyda Bold', sans-serif;
  font-size: 1.25rem;
}

.upload-bar {
  width: 100%;
  height: 0.25rem;
}

.upload-file-name {
  max-width: 100%;
  text-align: center;
}

.step-item {
  transition: all 0.5s;
  -webkit-transition: all 0.5s;
}

#user-full-name-layout {
  width: 100%;
  margin-top: 1rem;
}

#user-phone-number {
  width: 100%;
  direction: ltr;
}

#user-email {
  width: 100%;
  direction: ltr;
}

#user-email-phone-number-layout {
  width: 100%;
}

textarea {
  resize: none;
}

.tracking-code-gen-text {
  color: var(--primary-500);
  font-family: 'Peyda Medium', sans-serif;
  font-size: clamp(1rem, 2.5vw, 2rem);
}

.tracking-code-gen-done-text {
  color: var(--green-500);
  font-family: 'Peyda Medium', sans-serif;
  font-size: clamp(1rem, 2.5vw, 2rem);
  line-height: 2.5rem;
}

.tracking-code-gen-done-icon {
  color: var(--green-500);
  font-weight: bold;
  font-size: xx-large;
  text-align: center;
  scale: 1.4;
}

.tracking-code-gen-failed-text {
  color: var(--red-500);
  font-family: 'Peyda Medium', sans-serif;
  font-size: clamp(1rem, 2.5vw, 2rem);
  line-height: 2.5rem;
}

.tracking-code-gen-failed-icon {
  color: var(--red-500);
  font-weight: bold;
  font-size: xx-large;
  text-align: center;
  scale: 1.4;
}

.loading-bar {
  height: 0.5rem;
}
</style>
