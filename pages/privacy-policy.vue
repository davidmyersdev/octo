<script lang="ts" setup>
definePageMeta({ layout: 'minimal' })
useHead({ title: 'Privacy Policy' })
</script>

<template>
  <CorePage>
    <CoreProse class="prose prose-inherit m-auto max-w-prose">
      <h2>Privacy Policy</h2>

      <p class="text-layer-muted"><em>Updated on Monday, June 5th, 2023</em></p>

      <p>I, <CoreLink to="https://davidmyers.dev">David Myers</CoreLink>, built Octo as a Freemium app. This Service is provided by me at no cost and is intended for use as is.</p>
      <p>This page is used to inform visitors regarding my policies with the collection, use, and disclosure of Personal Information if anyone decided to use my Service.</p>
      <p>If you choose to use my Service, then you agree to the collection and use of information in relation to this policy. The Personal Information that I collect is used for providing and improving the Service. I will not use or share your information with anyone except as described in this Privacy Policy.</p>
      <p>The terms used in this Privacy Policy have the same meanings as in our <CoreLink :to="{ path: '/terms-and-conditions' }">Terms & Conditions</CoreLink>, which is accessible at Octo unless otherwise defined in this Privacy Policy.</p>

      <h4>Information Collection and Use</h4>

      <p>For a better experience, while using our Service, I may require you to provide us with certain personally identifiable information, including but not limited to your email address.</p>
      <p>The app does use third party services that may collect information used to identify you.</p>
      <p>Link to privacy policy of third party service providers used by the app</p>

      <ul>
        <li><CoreLink to="https://firebase.google.com/support/privacy/">Firebase (Google Cloud)</CoreLink></li>
        <li><CoreLink to="https://usefathom.com/privacy/">Fathom Analytics</CoreLink></li>
      </ul>

      <h4>Log Data</h4>

      <p>I want to inform you that whenever you use my Service, in a case of an error in the app I collect data and information (through third party products) on your phone called Log Data. This Log Data may include information such as your device Internet Protocol ("IP") address, device name, operating system version, the configuration of the app when utilizing my Service, the time and date of your use of the Service, and other statistics.</p>

      <h4>Cookies</h4>

      <p>Cookies are files with a small amount of data that are commonly used as anonymous unique identifiers. These are sent to your browser from the websites that you visit and are stored on your device&#39;s internal memory.</p>
      <p>This Service does not use these "cookies" explicitly. However, the app may use third party code and libraries that use "cookies" to collect information and improve their services. You have the option to either accept or refuse these cookies and know when a cookie is being sent to your device. If you choose to refuse our cookies, you may not be able to use some portions of this Service.</p>

      <h4>Service Providers</h4>

      <p>I may employ third-party companies and individuals due to the following reasons:</p>

      <ul>
        <li>To facilitate our Service;</li>
        <li>To provide the Service on our behalf;</li>
        <li>To perform Service-related services; or</li>
        <li>To assist us in analyzing how our Service is used.</li>
      </ul>

      <p>I want to inform users of this Service that these third parties have access to your Personal Information. The reason is to perform the tasks assigned to them on our behalf. However, they are obligated not to disclose or use the information for any other purpose.</p>

      <h4>Security</h4>

      <p>I value your trust in providing us your Personal Information, thus we are striving to use commercially acceptable means of protecting it. But remember that no method of transmission over the internet, or method of electronic storage is 100% secure and reliable, and I cannot guarantee its absolute security.</p>

      <h4>Links to Other Sites</h4>

      <p>This Service may contain links to other sites. If you click on a third-party link, you will be directed to that site. Note that these external sites are not operated by me. Therefore, I strongly advise you to review the Privacy Policy of these websites. I have no control over and assume no responsibility for the content, privacy policies, or practices of any third-party sites or services.</p>

      <h4>Children's Privacy</h4>

      <p>These Services do not address anyone under the age of 13. I do not knowingly collect personally identifiable information from children under 13 years of age. In the case I discover that a child under 13 has provided me with personal information, I immediately delete this from our servers. If you are a parent or guardian and you are aware that your child has provided us with personal information, please contact me so that I will be able to do necessary actions.</p>

      <h4>Changes to This Privacy Policy</h4>

      <p>I may update our Privacy Policy from time to time. Thus, you are advised to review this page periodically for any changes. I will notify you of any changes by posting the new Privacy Policy on this page.</p>
      <p>This policy is effective as of March 2nd, 2021.</p>

      <h4>Contact Us</h4>

      <p>If you have any questions or suggestions about my Privacy Policy, do not hesitate to contact me at <CoreLink to="mailto:hello@davidmyers.dev">hello@davidmyers.dev</CoreLink>.</p>

      <p class="text-layer-muted">This privacy policy page was created at <CoreLink to="https://privacypolicytemplate.net" class="text-current">privacypolicytemplate.net</CoreLink> and modified/generated by <CoreLink to="https://app-privacy-policy-generator.nisrulz.com/" class="text-current">App Privacy Policy Generator</CoreLink>.</p>
    </CoreProse>
  </CorePage>
</template>
