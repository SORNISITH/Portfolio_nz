import { createI18n } from 'vue-i18n'

const LANG = (type) => ({
  // Navbar
  home: type === 'en' ? 'Home' : 'ទំព័រដើម',
  about_me: type === 'en' ? 'About Me' : 'អំពី​ពួក​ខ្ញុំ',
  services: type === 'en' ? 'Services' : 'សេវាកម្ម',
  projects: type === 'en' ? 'Projects' : 'គម្រោង',
  github: type === 'en' ? 'Github' : 'ហ្គីតហប់ - Github',
  contact: type === 'en' ? 'Contact' : 'ទំនាក់ទំនង',
  blog: type === 'en' ? 'Blog' : 'ប្លុក',
  faq: type === 'en' ? 'FAQ' : 'សំណួរញឹកញាប់',

  // Buttons
  login: type === 'en' ? 'Login' : 'ចូលគណនី',
  register: type === 'en' ? 'Register' : 'ចុះឈ្មោះ',
  logout: type === 'en' ? 'Logout' : 'ចាកចេញ',
  submit: type === 'en' ? 'Submit' : 'ដាក់ស្នើ',
  cancel: type === 'en' ? 'Cancel' : 'បោះបង់',
  readMore: type === 'en' ? 'Read More' : 'អានបន្ថែម',
  viewDetails: type === 'en' ? 'View Details' : 'មើលព័ត៌មានលម្អិត',

  // Form Fields
  email: type === 'en' ? 'Email Address' : 'អាសយដ្ឋានអ៊ីមែល',
  password: type === 'en' ? 'Password' : 'ពាក្យសម្ងាត់',
  confirmPassword: type === 'en' ? 'Confirm Password' : 'បញ្ជាក់ពាក្យសម្ងាត់',
  name: type === 'en' ? 'Full Name' : 'ឈ្មោះពេញ',
  phone: type === 'en' ? 'Phone Number' : 'លេខទូរស័ព្ទ',
  message: type === 'en' ? 'Message' : 'សារ',

  // Auth
  forgotPassword: type === 'en' ? 'Forgot password?' : 'ភ្លេចពាក្យសម្ងាត់?',
  rememberMe: type === 'en' ? 'Remember me' : 'ចងចាំខ្ញុំ',
  noAccount: type === 'en' ? "Don't have an account?" : 'មិនទាន់មានគណនី?',
  haveAccount: type === 'en' ? 'Already have an account?' : 'មានគណនីរួចហើយ?',

  // Messages
  success: type === 'en' ? 'Operation successful' : 'ប្រតិបត្តិការជោគជ័យ',
  error: type === 'en' ? 'Something went wrong' : 'មានបញ្ហាមួយ',
  loading: type === 'en' ? 'Loading...' : 'កំពុងផ្ទុក...',
  noData: type === 'en' ? 'No data available' : 'គ្មានទិន្នន័យ',
  required: type === 'en' ? 'This field is required' : 'វាលនេះត្រូវតែបំពេញ',

  // Dashboard / Admin (optional)
  dashboard: type === 'en' ? 'Dashboard' : 'ផ្ទាំងគ្រប់គ្រង',
  users: type === 'en' ? 'Users' : 'អ្នកប្រើប្រាស់',
  settings: type === 'en' ? 'Settings' : 'ការកំណត់',
  reports: type === 'en' ? 'Reports' : 'របាយការណ៍',
  analytics: type === 'en' ? 'Analytics' : 'វិភាគ',

  // Confirmation
  areYouSure: type === 'en' ? 'Are you sure?' : 'តើ​អ្នក​ប្រាកដ​ឬ​អត់?',
  yes: type === 'en' ? 'Yes' : 'បាទ / ចាស',
  no: type === 'en' ? 'No' : 'ទេ',
  //footer
  contact_us: type === 'en' ? 'Contact Us' : 'ទំនាក់ទំនងយើង',

  perspective: type === 'en' ? 'Perspective Field' : 'ទស្សនៈវិស័យ ',
  perspective_desc:
    type === 'en'
      ? 'We are a leading web services provider, committed to delivering cutting-edge solutions that empower your business online. Our expert team focuses on innovation, reliability, and customer satisfaction.'
      : 'យើងគឺជាអ្នកផ្តល់សេវាវេបសាយដ៏ឈានមុខគេ ដោយប្តេជ្ញាចិត្តផ្តល់នូវដំណោះស្រាយឈានមុខបច្ចេកវិទ្យា ដែលជួយឲ្យអាជីវកម្មរបស់អ្នករីកចម្រើនលើអ៊ីនធឺណិត។ ក្រុមអ្នកជំនាញរបស់យើងផ្តោតលើការច្នៃប្រឌិត ភាពទំនុកចិត្ត និងការពេញចិត្តរបស់អតិថិជន។ ',
  // Footer
  privacy: type === 'en' ? 'Privacy Policy' : 'គោលការណ៍ភាពឯកជន',
  terms: type === 'en' ? 'Terms of Service' : 'លក្ខខណ្ឌសេវាកម្ម',
  footer_email:
    type === 'en' ? 'Email : nisith100394@@gmail.com' : 'អ៊ីមែល : nisith10039@4@gmail.com',

  footer_phone: type === 'en' ? 'Phone : +855 69907747' : 'ទូរស័ព្ទ : +855 69907747',
  footer_our_services: type === 'en' ? 'Our Services' : 'សេវាកម្ម​របស់​យើង',
  footer_web_design: type === 'en' ? 'Web Design' : 'រចនាប័ទ្ម​វេបសាយ',
  footer_app_development: type === 'en' ? 'App Development' : 'ការអភិវឌ្ឍកម្មវិធី',
  footer_seo_optimization: type === 'en' ? 'SEO Optimization' : 'បង្កើនប្រសិទ្ធភាព SEO',
  footer_cloud_hosting: type === 'en' ? 'Cloud Hosting' : 'ម៉ាស៊ីនបម្រើពពក',

  footer_address: type === 'en' ? 'Address : Phnom Penh, Cambodia' : 'អាសយដ្ឋាន : ភ្នំពេញ, កម្ពុជា',
  copyright:
    type === 'en'
      ? '© 2025  SOR NISITH. All rights reserved.'
      : '© ២០២៥ ក្រុមហ៊ុនរបស់អ្នក។ រក្សាសិទ្ធិគ្រប់យ៉ាង។',

  // Misc
  language: type === 'en' ? 'Language' : 'ភាសា',
  darkMode: type === 'en' ? 'Dark Mode' : 'របៀបងងឹត',
  lightMode: type === 'en' ? 'Light Mode' : 'របៀបភ្លឺ',
})

const i18n = createI18n({
  legacy: false, // important for Composition API
  locale: 'en',
  fallbackLocale: 'khm',
  messages: {
    en: LANG('en'),
    khm: LANG('khm'),
  },
})

export default i18n
