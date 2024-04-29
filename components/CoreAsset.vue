<script lang="ts" setup>
import {
  UserCircleIcon as Account,
  CheckIcon as CheckMark,
  CalendarIcon as Daily,
  XMarkIcon as Dismiss,
  DocumentIcon as Document,
  DocumentPlusIcon as DocumentPlus,
  DocumentTextIcon as DocumentWithText,
  BeakerIcon as Experimental,
  ChatBubbleLeftRightIcon as Feedback,
  InboxIcon as Inbox,
  CloudArrowUpIcon as Save,
  MagnifyingGlassIcon as Search,
  ChevronUpDownIcon as SectionToggle,
  Cog8ToothIcon as Settings,
  HashtagIcon as Tag,
  TrashIcon as Trash,
  Square2StackIcon as Workspace,
  Squares2X2Icon as Workspaces,
} from '@heroicons/vue/24/outline'
import Logo from '#root/assets/logo-icon.svg?component'
import GitHub from '#root/assets/github.svg?component'

defineProps<{
  type: keyof typeof assets,
}>()

const assets = {
  Account,
  CheckMark,
  Daily,
  Dismiss,
  Document,
  DocumentPlus,
  DocumentWithText,
  Experimental,
  Feedback,
  GitHub,
  Inbox,
  Logo,
  Save,
  Search,
  SectionToggle,
  Settings,
  Tag,
  Trash,
  Workspace,
  Workspaces,
}
</script>

<template>
  <component :is="assets[type]" />
</template>
