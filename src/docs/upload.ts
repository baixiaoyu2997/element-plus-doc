import type { TagDoc } from '@/types/tag-doc';
const doc: TagDoc.TagDocInstance = {
  url: '',
  attributes: [
    { name: 'action', description: { cn: 'request URL.', en: 'request URL.' }, type: 'string', default: '—', value: [] },
    { name: 'headers', description: { cn: 'request headers.', en: 'request headers.' }, type: 'headers', default: 'Record&lt;string, any>', value: [] },
    { name: 'method', description: { cn: 'set upload request method.', en: 'set upload request method.' }, type: 'string', default: "'post'", value: [] },
    {
      name: 'multiple',
      description: { cn: 'whether uploading multiple files is permitted.', en: 'whether uploading multiple files is permitted.' },
      type: 'boolean',
      default: 'false',
      value: [],
    },
    {
      name: 'data',
      description: { cn: 'additions options of request.', en: 'additions options of request.' },
      type: 'record&lt;string, any>',
      default: '—',
      value: [],
    },
    { name: 'name', description: { cn: 'key name for uploaded file.', en: 'key name for uploaded file.' }, type: 'string', default: "'file'", value: [] },
    {
      name: 'with-credentials',
      description: { cn: 'whether cookies are sent.', en: 'whether cookies are sent.' },
      type: 'boolean',
      default: 'false',
      value: [],
    },
    {
      name: 'show-file-list',
      description: { cn: 'whether to show the uploaded file list.', en: 'whether to show the uploaded file list.' },
      type: 'boolean',
      default: 'true',
      value: [],
    },
    {
      name: 'drag',
      description: { cn: 'whether to activate drag and drop mode.', en: 'whether to activate drag and drop mode.' },
      type: 'boolean',
      default: 'false',
      value: [],
    },
    {
      name: 'accept',
      description: {
        cn: 'accepted <a href="https://developer.mozilla.org/en-US/docs/Web/HTML/Element/input#attr-accept">file types</a>, will not work when <code>thumbnail-mode === true</code>.',
        en: 'accepted <a href="https://developer.mozilla.org/en-US/docs/Web/HTML/Element/input#attr-accept">file types</a>, will not work when <code>thumbnail-mode === true</code>.',
      },
      type: 'string',
      default: '—',
      value: [],
    },
    {
      name: 'on-preview',
      description: { cn: 'hook function when clicking the uploaded files.', en: 'hook function when clicking the uploaded files.' },
      type: '(uploadfile: uploadfile) => void',
      default: '—',
      value: [],
    },
    {
      name: 'on-remove',
      description: { cn: 'hook function when files are removed.', en: 'hook function when files are removed.' },
      type: '(uploadfile: uploadfile, uploadfiles: uploadfiles) => void',
      default: '—',
      value: [],
    },
    {
      name: 'on-success',
      description: { cn: 'hook function when uploaded successfully.', en: 'hook function when uploaded successfully.' },
      type: '(response: any, uploadfile: uploadfile, uploadfiles: uploadfiles) => void',
      default: '—',
      value: [],
    },
    {
      name: 'on-error',
      description: { cn: 'hook function when some errors occurs.', en: 'hook function when some errors occurs.' },
      type: '(error: error, uploadfile: uploadfile, uploadfiles: uploadfiles) => void',
      default: '—',
      value: [],
    },
    {
      name: 'on-progress',
      description: { cn: 'hook function when some progress occurs.', en: 'hook function when some progress occurs.' },
      type: '(evt: uploadprogressevent, uploadfile: uploadfile, uploadfiles: uploadfiles) => void',
      default: '—',
      value: [],
    },
    {
      name: 'on-change',
      description: {
        cn: 'hook function when select file or upload file success or upload file fail.',
        en: 'hook function when select file or upload file success or upload file fail.',
      },
      type: '(uploadfile: uploadfile, uploadfiles: uploadfiles) => void',
      default: '—',
      value: [],
    },
    {
      name: 'on-exceed',
      description: { cn: 'hook function when limit is exceeded.', en: 'hook function when limit is exceeded.' },
      type: '(files: file[',
      default: '—',
      value: ['uploadFilesUploadUserFile'],
    },
    {
      name: 'before-upload',
      description: {
        cn: 'hook function before uploading with the file to be uploaded as its parameter. If <code>false</code> is returned or a <code>Promise</code> is returned and then is rejected, uploading will be aborted.',
        en: 'hook function before uploading with the file to be uploaded as its parameter. If <code>false</code> is returned or a <code>Promise</code> is returned and then is rejected, uploading will be aborted.',
      },
      type: '(rawfile: uploadrawfile) => awaitable&lt;void',
      default: 'undefined',
      value: [],
    },
    {
      name: 'before-remove',
      description: {
        cn: 'hook function before removing a file with the file and file list as its parameters. If <code>false</code> is returned or a <code>Promise</code> is returned and then is rejected, removing will be aborted.',
        en: 'hook function before removing a file with the file and file list as its parameters. If <code>false</code> is returned or a <code>Promise</code> is returned and then is rejected, removing will be aborted.',
      },
      type: '(uploadfile: uploadfile, uploadfiles: uploadfiles) => awaitable<boolean></boolean>',
      default: '—',
      value: [],
    },
    {
      name: 'file-list / v-model:file-list',
      description: { cn: 'default uploaded files.', en: 'default uploaded files.' },
      type: 'uploaduserfile[',
      default: '[]',
      value: [],
    },
    { name: 'list-type', description: { cn: 'type of file list.', en: 'type of file list.' }, type: "`'text'", default: "'picture'", value: [] },
    {
      name: 'auto-upload',
      description: { cn: 'whether to auto upload file.', en: 'whether to auto upload file.' },
      type: 'boolean',
      default: 'true',
      value: [],
    },
    {
      name: 'http-request',
      description: {
        cn: "override default xhr behavior, allowing you to implement your own upload-file's request.",
        en: "override default xhr behavior, allowing you to implement your own upload-file's request.",
      },
      type: '(options: uploadrequestoptions) => xmlhttprequest',
      default: 'Promise<unknown></unknown>',
      value: [],
    },
    { name: 'disabled', description: { cn: 'whether to disable upload.', en: 'whether to disable upload.' }, type: 'boolean', default: 'false', value: [] },
    {
      name: 'limit',
      description: { cn: 'maximum number of uploads allowed.', en: 'maximum number of uploads allowed.' },
      type: 'number',
      default: '—',
      value: [],
    },
  ],
  exposes: [
    { name: 'abort', description: { cn: 'cancel upload request.', en: 'cancel upload request.' }, type: '(file: uploadfile) => void', tsType: '' },
    { name: 'submit', description: { cn: 'upload the file list manually.', en: 'upload the file list manually.' }, type: '() => void', tsType: '' },
    {
      name: 'clearFiles',
      description: {
        cn: 'clear the file list (this method is not supported in the <code>before-upload</code> hook).',
        en: 'clear the file list (this method is not supported in the <code>before-upload</code> hook).',
      },
      type: '`(status?: array&lt;"ready"',
      tsType: '',
    },
    {
      name: '<code>handleStart</code>',
      description: { cn: 'select the file manually.', en: 'select the file manually.' },
      type: '<code>(rawfile: uploadrawfile) => void</code>',
      tsType: '',
    },
    {
      name: '<code>handleRemove</code>',
      description: {
        cn: 'remove the file manually. <code>file</code> and <code>rawFile</code> has been merged. <code>rawFile</code> will be removed in <code>v2.2.0</code>.',
        en: 'remove the file manually. <code>file</code> and <code>rawFile</code> has been merged. <code>rawFile</code> will be removed in <code>v2.2.0</code>.',
      },
      type: '`(file: uploadfile',
      tsType: '',
    },
  ],
  slots: [
    { name: 'default', description: { cn: 'customize default content.', en: 'customize default content.' } },
    { name: 'trigger', description: { cn: 'content which triggers file dialog.', en: 'content which triggers file dialog.' } },
    { name: 'tip', description: { cn: 'content of tips.', en: 'content of tips.' } },
    { name: 'file', description: { cn: 'content of thumbnail template.', en: 'content of thumbnail template.' } },
  ],
};
export default doc;
