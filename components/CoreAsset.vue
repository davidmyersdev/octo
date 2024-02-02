<script lang="ts" setup>
import {
  UserCircleIcon as Account,
  CheckIcon as CheckMark,
  DocumentIcon as Document,
  DocumentTextIcon as DocumentWithText,
  BeakerIcon as Experimental,
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

defineProps<{
  type: keyof typeof assets,
}>()

const assets = {
  Account,
  CheckMark,
  Document,
  DocumentWithText,
  Experimental,
  Inbox,
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
