<script lang="ts" setup>
import * as Tabler from '@tabler/icons-vue'
import Logo from '#root/assets/logo-icon.svg?component'

withDefaults(defineProps<{
  name: keyof typeof icons,
  /**
   * Value for `height` and `width` attributes.
   *
   * @default '1.25rem'
   */
  size?: number | string,
  /**
   * Value for `stroke-width` attribute.
   *
   * @default 1.25
   */
  strokeWidth?: number,
}>(), {
  size: '1.25rem',
  strokeWidth: 1.25,
})

const icons = {
  Logo,
  Account: Tabler.IconUserCircle,
  ArrowRight: Tabler.IconArrowRight,
  ArrowUp: Tabler.IconArrowUp,
  ArrowUpCircle: Tabler.IconCircleArrowUp,
  BrandCodeSandbox: Tabler.IconBrandCodesandbox,
  BrandDiscord: Tabler.IconBrandDiscord,
  BrandGitHub: Tabler.IconBrandGithub,
  BrandGoogle: Tabler.IconBrandGoogle,
  BrandOpenAI: Tabler.IconBrandOpenai,
  Check: Tabler.IconCheck,
  CheckCircle: Tabler.IconCircleCheck,
  Clipboard: Tabler.IconClipboard,
  ContextSize: Tabler.IconRulerMeasure2,
  Daily: Tabler.IconNotebook,
  Dismiss: Tabler.IconX,
  Doc: Tabler.IconFile,
  DocDuplicate: Tabler.IconFiles,
  DocImport: Tabler.IconFileImport,
  DocLoad: Tabler.IconFileIsr,
  DocPlus: Tabler.IconFilePlus,
  DocWithText: Tabler.IconFileText,
  DotsVertical: Tabler.IconDotsVertical,
  Email: Tabler.IconMail,
  Experimental: Tabler.IconTestPipe,
  Feedback: Tabler.IconMessages,
  FormatBlockquote: Tabler.IconBlockquote,
  FormatBold: Tabler.IconBold,
  FormatCode: Tabler.IconCode,
  FormatHeading: Tabler.IconHeading,
  FormatImage: Tabler.IconPhoto,
  FormatIndent: Tabler.IconIndentIncrease,
  FormatItalic: Tabler.IconItalic,
  FormatLink: Tabler.IconLink,
  FormatListBulleted: Tabler.IconList,
  FormatListChecked: Tabler.IconListCheck,
  FormatListNumbered: Tabler.IconListNumbers,
  FormatUnindent: Tabler.IconIndentDecrease,
  FormatUpload: Tabler.IconUpload,
  Graph: Tabler.IconAffiliate,
  ImagePlus: Tabler.IconPhotoPlus,
  Inbox: Tabler.IconInbox,
  Instruction: Tabler.IconListDetails,
  LockClosed: Tabler.IconLock,
  LockOpen: Tabler.IconLockOpen,
  LogOut: Tabler.IconLogout,
  Menu: Tabler.IconMenu2,
  Message: Tabler.IconMessage,
  MessagePlus: Tabler.IconMessagePlus,
  Moon: Tabler.IconMoon,
  NetworkAvailable: Tabler.IconCloudCheck,
  NetworkUnavailable: Tabler.IconCloudX,
  OpenFile: Tabler.IconFileDots,
  PencilPlus: Tabler.IconPencilPlus,
  Private: Tabler.IconShieldLock,
  Save: Tabler.IconCloudUp,
  Search: Tabler.IconSearch,
  Settings: Tabler.IconSettings,
  Sparkles: Tabler.IconSparkles,
  Sun: Tabler.IconSun,
  SunWithMoon: Tabler.IconSunMoon,
  Tag: Tabler.IconHash,
  Toggle: Tabler.IconSelector,
  Trash: Tabler.IconTrash,
  Workspace: Tabler.IconFolder,
  Workspaces: Tabler.IconFolders,
}
</script>

<template>
  <component :is="icons[name]" :height="size" :width="size" :stroke-width="strokeWidth" />
</template>
