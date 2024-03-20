<script lang="ts" setup>
import { ref } from 'vue'
import { usePrimeVue } from 'primevue/config'
import { useToast } from 'primevue/usetoast'

const toast = useToast()
const termsAndConditionsRead = ref(false)
const startRequestRegistration = ref(false)

const active = ref(0)


const $primevue = usePrimeVue()

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
    toast.add({ severity: 'error', summary: 'خطا', detail: 'فایل باید حداکثر 5MB و PDF باشد!', life: 3000 })
  } else {
    fileSelected.value = true
  }
}

const uploadEvent = (callback) => {
  setTimeout(() => {
    if (!fileUploaded.value) {
      fileCouldntUpload.value = true
    }
  }, 3000)
  totalSizePercent.value = totalSize.value / 10
  callback()
}

const onTemplatedUpload = () => {
  fileUploaded.value = true
  fileCouldntUpload.value = false
  toast.add({ severity: 'success', summary: 'نتیجه آپلود', detail: 'فایل فرم درخواست با موفقیت آپلود شد!', life: 3000 })
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
</script>

<template>
  <Toast />
  <div class="container">
    <div v-if="!startRequestRegistration" class="request-container">
      <h1 class="title">طراحی اپلیکیشن</h1>
      <p class="description">
        طراحی اپلیکیشن، شامل طراحی نرم افزار های دسکتاپ (ویندوز، لینوکس و مک) و نرم افزار های موبایلی (اندروید، آی او
        اس)
        می باشد.<br>
        این اپلیکیشن ها می توانند به صورت آنلاین یا آفلاین باشند و کار های خاصی مختص یک کاربر خاص یا همه اقشار جامعه
        باشند.<br>
        درخواست خود را در اینجا ثبت و منتظر دریافت سفارش خود با بهترین کیفیت باشید.
      </p>
      <div class="spacer" />
      <Fieldset class="order-request" legend="نحوه درخواست و انجام سفارش">
        <p class="m-0 order-request-text">
          ما از شما یک سری از اطلاعات که برای ساخت اپلیکیشن نیاز است، دریافت
          می
          کنیم.<br />
          اطلاعاتی نظیر مشخصات کامل شما و نوع اپلیکیشن، شرح قابلیت هایی که باید داشته باشد، قیمت پیشنهادی شما برای
          انجام،
          مدت زمان پیشنهادی برای انجام این فرایند<br />
          سپس این اطلاعات را به کارشناسان ارسال می کنیم تا بررسی کنند و نظر خود و قیمت پیشنهادی و مدت زمان پیشنهادی آنها
          هم دریافت کنیم؛<br />
          ضمناً این بررسی ممکن است تا نهایت 2 تا 3 روز کاری به طول بیانجامد<br />
          سپس قیمت و مدت زمان توافقی را از شما استعلام می کنیم و قراردادی را شامل این اطلاعات به شما می دهیم؛<br />
          شما لطف می کنید و این قرارداد را دریافت و امضاء می کنید؛ سپس آن را ارسال کرده و کد رهگیری را دریافت کنید.
          <br />
          پس از آن ما کار خود را تا نهایت 1 روز کاری بعد، آغاز می کنیم؛<br>
          ضمناً این را هم در نظر داشته باشید که به علت سفارشات بالا، ممکن است کمی این فرایند زمان بر باشد!<br>
          شما می توانید با این کد رهگیری، به سامانه رهگیری سفارشات مراجعه کنید و از آخرین وضعیت سفارش خود مطلع شوید.<br>
          اگر مشکلی هم بود، به ما تیکت دهید یا در سامانه پشتیبانی آنلاین، مطرح کنید.
        </p>
      </Fieldset>
      <div id="order-request-button-layout">
        <div id="order-request-terms-ok-layout">
          <Checkbox v-model="termsAndConditionsRead" binary inputId="order-request-terms-ok" />
          <label id="order-request-terms-ok-label" for="order-request-terms-ok">&nbsp;&nbsp;&nbsp;&nbsp;<router-link
            style="color: var(--primary-500);" to="/terms">قوانین و مقررات
          </router-link>
            را مطالعه کرده و آنها را به صورت کامل می پذیرم.</label>
        </div>
        <div class="spacer" />
        <Button id="order-request-button" label="شروع ثبت سفارش" type="button" @click="start" />
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
                  class="bg-transparent border-none inline-flex flex-column gap-2 align-items-center justify-content-center">
                        <span
                          :class="['border-round border-2 w-3rem h-3rem inline-flex align-items-center justify-content-center', { 'bg-primary border-primary': index <= active, 'surface-border': index > active }]">
                            <i class="pi pi-file-edit" />
                        </span>
                  <span
                    :class="[{ 'text-primary tab-header-title-unselected': index < active, 'text-primary tab-header-title-selected': index == active, 'surface-border tab-header-title-unselected': index > active }]">تکمیل فرم</span>
                </p>
              </template>
              <template #content="{ nextCallback }">
                <div class="flex flex-column gap-2 mx-auto" style="min-height: 16rem; max-width: 20rem">
                  <div class="text-center mt-3 mb-3 text-xl">فرم درخواست را دریافت و تکمیل کنید؛<br>سپس ارسال کنید و به
                    مرحله بعد بروید.
                  </div>
                  <div class="field p-fluid">
                    <a href="/ServiceRegistrationForm.pdf" target="_blank">
                      <Button icon="pi pi-download" label="دانلود فرم درخواست" />
                    </a>
                  </div>
                  <div class="field p-fluid">
                    <FileUpload :max-file-size="5242880" accept="application/pdf"
                                invalid-file-size-message="حجم فایل بیش از اندازه 5 مگابایت بود!" invalid-file-type-message="فایل باید PDF باشد!"
                                mode="advanced"
                                name="formUpload[]"
                                url="/api/work/upload"
                                @select="onSelectedFiles"
                                @upload="onTemplatedUpload($event)">
                      <template #header="{ chooseCallback, uploadCallback, clearCallback, files }">
                        <div class="flex flex-wrap justify-content-between align-items-center flex-1 gap-2">
                          <div class="flex gap-3">
                            <Button v-if="fileSelected && !fileCouldntUpload" :disabled="!files || files.length === 0"
                                    class="px-2"
                                    icon="pi pi-cloud-upload" icon-pos="right" label="آپلود"
                                    rounded severity="success" style="direction: ltr"
                                    text @click="uploadEvent(uploadCallback)"></Button>
                            <Button v-if="fileSelected && !fileCouldntUpload && !fileUploaded"
                                    :disabled="(!files || files.length === 0) && !fileCouldntUpload"
                                    class="px-2" icon="pi pi-times" icon-pos="right"
                                    label="حذف" rounded
                                    severity="danger" style="direction: ltr" text
                                    @click="onClearTemplatingUpload(clearCallback)"></Button>
                            <Button v-else-if="!fileSelected" class="px-2" icon="pi pi-file" icon-pos="right"
                                    label="انتخاب" rounded style="direction: ltr" text
                                    @click="chooseCallback()"></Button>
                          </div>
                        </div>
                      </template>
                      <template #content="{ files, uploadedFiles, removeUploadedFileCallback, removeFileCallback }">
                        <div v-if="files.length > 0">
                          <Badge class="upload-file-status" severity="warning" value="در انتظار بارگذاری" />
                          <div class="flex flex-wrap p-0 sm:p-2 gap-2 align-items-center justify-content-center">
                            <div v-for="(file, _) of files" :key="file.name + file.type + file.size"
                                 class="card m-0 px-6 flex flex-column border-1 surface-border align-items-center gap-3">
                              <Avatar class="mr-2" icon="pi pi-file" size="xlarge" />
                              <span class="font-semibold upload-file-name">{{ file.name }}</span>
                            </div>
                          </div>
                        </div>

                        <div
                          v-if="uploadedFiles.length > 0 && !fileUploaded && !fileCouldntUpload && !fileUploadCleared">
                          <ProgressBar class="upload-bar w-full" mode="indeterminate"></ProgressBar>
                          <Badge class="upload-file-status" severity="info" value="در حال بارگذاری ..." />
                          <div class="flex flex-wrap p-0 sm:p-2 gap-2 align-items-center justify-content-center">
                            <div v-for="(file, _) of uploadedFiles" :key="file.name + file.type + file.size"
                                 class="card m-0 px-6 flex flex-column border-1 surface-border align-items-center gap-3">
                              <Avatar class="mr-2" icon="pi pi-file" size="xlarge" />
                              <span class="font-semibold upload-file-name">{{ file.name }}</span>
                            </div>
                          </div>
                        </div>

                        <div v-if="uploadedFiles.length > 0 && fileUploaded && !fileCouldntUpload">
                          <Badge class="upload-file-status" severity="success" value="فایل بارگذاری شد" />
                        </div>

                        <div v-if="uploadedFiles.length > 0 && !fileUploaded && fileCouldntUpload">
                          <Badge class="upload-file-status" severity="danger" value="فایل بارگذاری نشد!" />
                          <div class="flex flex-wrap p-0 sm:p-2 gap-2 align-items-center justify-content-center">
                            <div v-for="(file, _) of uploadedFiles" :key="file.name + file.type + file.size"
                                 class="card m-0 px-6 flex flex-column border-1 surface-border align-items-center gap-3">
                              <Avatar class="mr-2" icon="pi pi-file" size="xlarge" />
                              <span class="font-semibold upload-file-name">{{ file.name }}</span>
                              <Button v-if="fileSelected"
                                      :disabled="(!uploadedFiles || uploadedFiles.length === 0) && !fileCouldntUpload"
                                      class="px-2" icon="pi pi-times"
                                      icon-pos="right"
                                      label="حذف"
                                      rounded severity="danger" style="direction: ltr" text
                                      @click="onClearTemplatingUpload(removeUploadedFileCallback)"></Button>
                            </div>
                          </div>
                        </div>
                      </template>
                      <template #empty>
                        <div class="flex align-items-center justify-content-center flex-column">
                          <i class="pi pi-cloud-upload text-7xl text-400 border-400" />
                          <p class="mt-3 mb-0 upload-text text-1xl text-400 border-400">اینجا رها یا انتخاب کنید.</p>
                        </div>
                      </template>
                    </FileUpload>
                  </div>
                </div>
                <div class="flex pt-4 justify-content-end">
                  <Button icon="pi pi-arrow-left" label="بعدی" style="direction: ltr" @click="nextCallback" />
                </div>
              </template>
            </StepperPanel>
            <StepperPanel>
              <template #header="{ index, clickCallback }">
                <button class="bg-transparent border-none inline-flex flex-column gap-2" @click="clickCallback">
                        <span
                          :class="['border-round border-2 w-3rem h-3rem inline-flex align-items-center justify-content-center', { 'bg-primary border-primary': index <= active, 'surface-border': index > active }]">
                            <i class="pi pi-star" />
                        </span>
                </button>
              </template>
              <template #content="{ prevCallback, nextCallback }">
                <div class="flex flex-column gap-2 mx-auto" style="min-height: 16rem; max-width: 24rem">
                  <div class="text-center mt-3 mb-3 text-xl font-semibold">Choose your interests</div>
                  <div class="flex flex-wrap justify-content-center gap-3">
                    <ToggleButton v-model="option1" offLabel="Nature" onLabel="Nature" />
                    <ToggleButton v-model="option2" offLabel="Art" onLabel="Art" />
                    <ToggleButton v-model="option3" offLabel="Music" onLabel="Music" />
                    <ToggleButton v-model="option4" offLabel="Design" onLabel="Design" />
                    <ToggleButton v-model="option5" offLabel="Photography" onLabel="Photography" />
                    <ToggleButton v-model="option6" offLabel="Movies" onLabel="Movies" />
                    <ToggleButton v-model="option7" offLabel="Sports" onLabel="Sports" />
                    <ToggleButton v-model="option8" offLabel="Gaming" onLabel="Gaming" />
                    <ToggleButton v-model="option9" offLabel="Traveling" onLabel="Traveling" />
                    <ToggleButton v-model="option10" offLabel="Dancing" onLabel="Dancing" />
                  </div>
                </div>
                <div class="flex pt-4 justify-content-between">
                  <Button icon="pi pi-arrow-left" label="Back" severity="secondary" @click="prevCallback" />
                  <Button icon="pi pi-arrow-right" iconPos="right" label="Next" @click="nextCallback" />
                </div>
              </template>
            </StepperPanel>
            <StepperPanel>
              <template #header="{ index, clickCallback }">
                <button class="bg-transparent border-none inline-flex flex-column gap-2" @click="clickCallback">
                        <span
                          :class="['border-round border-2 w-3rem h-3rem inline-flex align-items-center justify-content-center', { 'bg-primary border-primary': index <= active, 'surface-border': index > active }]">
                            <i class="pi pi-id-card" />
                        </span>
                </button>
              </template>
              <template #content="{ prevCallback }">
                <div class="flex flex-column gap-2 mx-auto" style="min-height: 16rem; max-width: 24rem">
                  <div class="text-center mt-3 mb-3 text-xl font-semibold">Account created successfully</div>
                  <div class="text-center">
                    <img alt="logo" src="https://primefaces.org/cdn/primevue/images/stepper/content.svg" />
                  </div>
                </div>
                <div class="flex pt-4 justify-content-start">
                  <Button icon="pi pi-arrow-left" label="Back" severity="secondary" @click="prevCallback" />
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
}

.order-request {
  text-align: justify;
}

.order-request-text {
  text-align: justify;
  font-family: "Peyda Regular", sans-serif;
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
  font-family: "Peyda Medium", sans-serif;
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
  font-family: "Peyda Black", sans-serif;
  text-align: center;
}

.order-card-spacer {
  margin-top: 1rem;
}

.tab-header-title-selected {
  font-family: "Peyda Bold", sans-serif;
  display: block;
}

.tab-header-title-unselected {
  display: none;
}

.upload-text {
  font-family: "Peyda Bold", sans-serif;
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
</style>
