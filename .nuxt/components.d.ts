
import type { DefineComponent, SlotsType } from 'vue'
type IslandComponent<T extends DefineComponent> = T & DefineComponent<{}, {refresh: () => Promise<void>}, {}, {}, {}, {}, {}, {}, {}, {}, {}, {}, SlotsType<{ fallback: { error: unknown } }>>
interface _GlobalComponents {
      'UAccordion': typeof import("../node_modules/@nuxt/ui/dist/runtime/components/Accordion.vue")['default']
    'UAlert': typeof import("../node_modules/@nuxt/ui/dist/runtime/components/Alert.vue")['default']
    'UApp': typeof import("../node_modules/@nuxt/ui/dist/runtime/components/App.vue")['default']
    'UAvatar': typeof import("../node_modules/@nuxt/ui/dist/runtime/components/Avatar.vue")['default']
    'UAvatarGroup': typeof import("../node_modules/@nuxt/ui/dist/runtime/components/AvatarGroup.vue")['default']
    'UBadge': typeof import("../node_modules/@nuxt/ui/dist/runtime/components/Badge.vue")['default']
    'UBreadcrumb': typeof import("../node_modules/@nuxt/ui/dist/runtime/components/Breadcrumb.vue")['default']
    'UButton': typeof import("../node_modules/@nuxt/ui/dist/runtime/components/Button.vue")['default']
    'UButtonGroup': typeof import("../node_modules/@nuxt/ui/dist/runtime/components/ButtonGroup.vue")['default']
    'UCard': typeof import("../node_modules/@nuxt/ui/dist/runtime/components/Card.vue")['default']
    'UCarousel': typeof import("../node_modules/@nuxt/ui/dist/runtime/components/Carousel.vue")['default']
    'UCheckbox': typeof import("../node_modules/@nuxt/ui/dist/runtime/components/Checkbox.vue")['default']
    'UChip': typeof import("../node_modules/@nuxt/ui/dist/runtime/components/Chip.vue")['default']
    'UCollapsible': typeof import("../node_modules/@nuxt/ui/dist/runtime/components/Collapsible.vue")['default']
    'UCommandPalette': typeof import("../node_modules/@nuxt/ui/dist/runtime/components/CommandPalette.vue")['default']
    'UContainer': typeof import("../node_modules/@nuxt/ui/dist/runtime/components/Container.vue")['default']
    'UContextMenu': typeof import("../node_modules/@nuxt/ui/dist/runtime/components/ContextMenu.vue")['default']
    'UContextMenuContent': typeof import("../node_modules/@nuxt/ui/dist/runtime/components/ContextMenuContent.vue")['default']
    'UDrawer': typeof import("../node_modules/@nuxt/ui/dist/runtime/components/Drawer.vue")['default']
    'UDropdownMenu': typeof import("../node_modules/@nuxt/ui/dist/runtime/components/DropdownMenu.vue")['default']
    'UDropdownMenuContent': typeof import("../node_modules/@nuxt/ui/dist/runtime/components/DropdownMenuContent.vue")['default']
    'UForm': typeof import("../node_modules/@nuxt/ui/dist/runtime/components/Form.vue")['default']
    'UFormField': typeof import("../node_modules/@nuxt/ui/dist/runtime/components/FormField.vue")['default']
    'UIcon': typeof import("../node_modules/@nuxt/ui/dist/runtime/components/Icon.vue")['default']
    'UInput': typeof import("../node_modules/@nuxt/ui/dist/runtime/components/Input.vue")['default']
    'UInputMenu': typeof import("../node_modules/@nuxt/ui/dist/runtime/components/InputMenu.vue")['default']
    'UInputNumber': typeof import("../node_modules/@nuxt/ui/dist/runtime/components/InputNumber.vue")['default']
    'UKbd': typeof import("../node_modules/@nuxt/ui/dist/runtime/components/Kbd.vue")['default']
    'ULink': typeof import("../node_modules/@nuxt/ui/dist/runtime/components/Link.vue")['default']
    'ULinkBase': typeof import("../node_modules/@nuxt/ui/dist/runtime/components/LinkBase.vue")['default']
    'UModal': typeof import("../node_modules/@nuxt/ui/dist/runtime/components/Modal.vue")['default']
    'UModalProvider': typeof import("../node_modules/@nuxt/ui/dist/runtime/components/ModalProvider.vue")['default']
    'UNavigationMenu': typeof import("../node_modules/@nuxt/ui/dist/runtime/components/NavigationMenu.vue")['default']
    'UPagination': typeof import("../node_modules/@nuxt/ui/dist/runtime/components/Pagination.vue")['default']
    'UPinInput': typeof import("../node_modules/@nuxt/ui/dist/runtime/components/PinInput.vue")['default']
    'UPopover': typeof import("../node_modules/@nuxt/ui/dist/runtime/components/Popover.vue")['default']
    'UProgress': typeof import("../node_modules/@nuxt/ui/dist/runtime/components/Progress.vue")['default']
    'URadioGroup': typeof import("../node_modules/@nuxt/ui/dist/runtime/components/RadioGroup.vue")['default']
    'USelect': typeof import("../node_modules/@nuxt/ui/dist/runtime/components/Select.vue")['default']
    'USelectMenu': typeof import("../node_modules/@nuxt/ui/dist/runtime/components/SelectMenu.vue")['default']
    'USeparator': typeof import("../node_modules/@nuxt/ui/dist/runtime/components/Separator.vue")['default']
    'USkeleton': typeof import("../node_modules/@nuxt/ui/dist/runtime/components/Skeleton.vue")['default']
    'USlideover': typeof import("../node_modules/@nuxt/ui/dist/runtime/components/Slideover.vue")['default']
    'USlideoverProvider': typeof import("../node_modules/@nuxt/ui/dist/runtime/components/SlideoverProvider.vue")['default']
    'USlider': typeof import("../node_modules/@nuxt/ui/dist/runtime/components/Slider.vue")['default']
    'USwitch': typeof import("../node_modules/@nuxt/ui/dist/runtime/components/Switch.vue")['default']
    'UTable': typeof import("../node_modules/@nuxt/ui/dist/runtime/components/Table.vue")['default']
    'UTabs': typeof import("../node_modules/@nuxt/ui/dist/runtime/components/Tabs.vue")['default']
    'UTextarea': typeof import("../node_modules/@nuxt/ui/dist/runtime/components/Textarea.vue")['default']
    'UToast': typeof import("../node_modules/@nuxt/ui/dist/runtime/components/Toast.vue")['default']
    'UToaster': typeof import("../node_modules/@nuxt/ui/dist/runtime/components/Toaster.vue")['default']
    'UTooltip': typeof import("../node_modules/@nuxt/ui/dist/runtime/components/Tooltip.vue")['default']
    'NuxtWelcome': typeof import("../node_modules/nuxt/dist/app/components/welcome.vue")['default']
    'NuxtLayout': typeof import("../node_modules/nuxt/dist/app/components/nuxt-layout")['default']
    'NuxtErrorBoundary': typeof import("../node_modules/nuxt/dist/app/components/nuxt-error-boundary")['default']
    'ClientOnly': typeof import("../node_modules/nuxt/dist/app/components/client-only")['default']
    'DevOnly': typeof import("../node_modules/nuxt/dist/app/components/dev-only")['default']
    'ServerPlaceholder': typeof import("../node_modules/nuxt/dist/app/components/server-placeholder")['default']
    'NuxtLink': typeof import("../node_modules/nuxt/dist/app/components/nuxt-link")['default']
    'NuxtLoadingIndicator': typeof import("../node_modules/nuxt/dist/app/components/nuxt-loading-indicator")['default']
    'NuxtRouteAnnouncer': typeof import("../node_modules/nuxt/dist/app/components/nuxt-route-announcer")['default']
    'NuxtImg': typeof import("../node_modules/@nuxt/image/dist/runtime/components/NuxtImg.vue")['default']
    'NuxtPicture': typeof import("../node_modules/@nuxt/image/dist/runtime/components/NuxtPicture.vue")['default']
    'Icon': typeof import("../node_modules/@nuxt/icon/dist/runtime/components/index")['default']
    'ColorScheme': typeof import("../node_modules/@nuxtjs/color-mode/dist/runtime/component.vue3.vue")['default']
    'NuxtPage': typeof import("../node_modules/nuxt/dist/pages/runtime/page-placeholder")['default']
    'NoScript': typeof import("../node_modules/nuxt/dist/head/runtime/components")['NoScript']
    'Link': typeof import("../node_modules/nuxt/dist/head/runtime/components")['Link']
    'Base': typeof import("../node_modules/nuxt/dist/head/runtime/components")['Base']
    'Title': typeof import("../node_modules/nuxt/dist/head/runtime/components")['Title']
    'Meta': typeof import("../node_modules/nuxt/dist/head/runtime/components")['Meta']
    'Style': typeof import("../node_modules/nuxt/dist/head/runtime/components")['Style']
    'Head': typeof import("../node_modules/nuxt/dist/head/runtime/components")['Head']
    'Html': typeof import("../node_modules/nuxt/dist/head/runtime/components")['Html']
    'Body': typeof import("../node_modules/nuxt/dist/head/runtime/components")['Body']
    'NuxtIsland': typeof import("../node_modules/nuxt/dist/app/components/nuxt-island")['default']
    'NuxtRouteAnnouncer': IslandComponent<typeof import("../node_modules/nuxt/dist/app/components/server-placeholder")['default']>
      'LazyUAccordion': typeof import("../node_modules/@nuxt/ui/dist/runtime/components/Accordion.vue")['default']
    'LazyUAlert': typeof import("../node_modules/@nuxt/ui/dist/runtime/components/Alert.vue")['default']
    'LazyUApp': typeof import("../node_modules/@nuxt/ui/dist/runtime/components/App.vue")['default']
    'LazyUAvatar': typeof import("../node_modules/@nuxt/ui/dist/runtime/components/Avatar.vue")['default']
    'LazyUAvatarGroup': typeof import("../node_modules/@nuxt/ui/dist/runtime/components/AvatarGroup.vue")['default']
    'LazyUBadge': typeof import("../node_modules/@nuxt/ui/dist/runtime/components/Badge.vue")['default']
    'LazyUBreadcrumb': typeof import("../node_modules/@nuxt/ui/dist/runtime/components/Breadcrumb.vue")['default']
    'LazyUButton': typeof import("../node_modules/@nuxt/ui/dist/runtime/components/Button.vue")['default']
    'LazyUButtonGroup': typeof import("../node_modules/@nuxt/ui/dist/runtime/components/ButtonGroup.vue")['default']
    'LazyUCard': typeof import("../node_modules/@nuxt/ui/dist/runtime/components/Card.vue")['default']
    'LazyUCarousel': typeof import("../node_modules/@nuxt/ui/dist/runtime/components/Carousel.vue")['default']
    'LazyUCheckbox': typeof import("../node_modules/@nuxt/ui/dist/runtime/components/Checkbox.vue")['default']
    'LazyUChip': typeof import("../node_modules/@nuxt/ui/dist/runtime/components/Chip.vue")['default']
    'LazyUCollapsible': typeof import("../node_modules/@nuxt/ui/dist/runtime/components/Collapsible.vue")['default']
    'LazyUCommandPalette': typeof import("../node_modules/@nuxt/ui/dist/runtime/components/CommandPalette.vue")['default']
    'LazyUContainer': typeof import("../node_modules/@nuxt/ui/dist/runtime/components/Container.vue")['default']
    'LazyUContextMenu': typeof import("../node_modules/@nuxt/ui/dist/runtime/components/ContextMenu.vue")['default']
    'LazyUContextMenuContent': typeof import("../node_modules/@nuxt/ui/dist/runtime/components/ContextMenuContent.vue")['default']
    'LazyUDrawer': typeof import("../node_modules/@nuxt/ui/dist/runtime/components/Drawer.vue")['default']
    'LazyUDropdownMenu': typeof import("../node_modules/@nuxt/ui/dist/runtime/components/DropdownMenu.vue")['default']
    'LazyUDropdownMenuContent': typeof import("../node_modules/@nuxt/ui/dist/runtime/components/DropdownMenuContent.vue")['default']
    'LazyUForm': typeof import("../node_modules/@nuxt/ui/dist/runtime/components/Form.vue")['default']
    'LazyUFormField': typeof import("../node_modules/@nuxt/ui/dist/runtime/components/FormField.vue")['default']
    'LazyUIcon': typeof import("../node_modules/@nuxt/ui/dist/runtime/components/Icon.vue")['default']
    'LazyUInput': typeof import("../node_modules/@nuxt/ui/dist/runtime/components/Input.vue")['default']
    'LazyUInputMenu': typeof import("../node_modules/@nuxt/ui/dist/runtime/components/InputMenu.vue")['default']
    'LazyUInputNumber': typeof import("../node_modules/@nuxt/ui/dist/runtime/components/InputNumber.vue")['default']
    'LazyUKbd': typeof import("../node_modules/@nuxt/ui/dist/runtime/components/Kbd.vue")['default']
    'LazyULink': typeof import("../node_modules/@nuxt/ui/dist/runtime/components/Link.vue")['default']
    'LazyULinkBase': typeof import("../node_modules/@nuxt/ui/dist/runtime/components/LinkBase.vue")['default']
    'LazyUModal': typeof import("../node_modules/@nuxt/ui/dist/runtime/components/Modal.vue")['default']
    'LazyUModalProvider': typeof import("../node_modules/@nuxt/ui/dist/runtime/components/ModalProvider.vue")['default']
    'LazyUNavigationMenu': typeof import("../node_modules/@nuxt/ui/dist/runtime/components/NavigationMenu.vue")['default']
    'LazyUPagination': typeof import("../node_modules/@nuxt/ui/dist/runtime/components/Pagination.vue")['default']
    'LazyUPinInput': typeof import("../node_modules/@nuxt/ui/dist/runtime/components/PinInput.vue")['default']
    'LazyUPopover': typeof import("../node_modules/@nuxt/ui/dist/runtime/components/Popover.vue")['default']
    'LazyUProgress': typeof import("../node_modules/@nuxt/ui/dist/runtime/components/Progress.vue")['default']
    'LazyURadioGroup': typeof import("../node_modules/@nuxt/ui/dist/runtime/components/RadioGroup.vue")['default']
    'LazyUSelect': typeof import("../node_modules/@nuxt/ui/dist/runtime/components/Select.vue")['default']
    'LazyUSelectMenu': typeof import("../node_modules/@nuxt/ui/dist/runtime/components/SelectMenu.vue")['default']
    'LazyUSeparator': typeof import("../node_modules/@nuxt/ui/dist/runtime/components/Separator.vue")['default']
    'LazyUSkeleton': typeof import("../node_modules/@nuxt/ui/dist/runtime/components/Skeleton.vue")['default']
    'LazyUSlideover': typeof import("../node_modules/@nuxt/ui/dist/runtime/components/Slideover.vue")['default']
    'LazyUSlideoverProvider': typeof import("../node_modules/@nuxt/ui/dist/runtime/components/SlideoverProvider.vue")['default']
    'LazyUSlider': typeof import("../node_modules/@nuxt/ui/dist/runtime/components/Slider.vue")['default']
    'LazyUSwitch': typeof import("../node_modules/@nuxt/ui/dist/runtime/components/Switch.vue")['default']
    'LazyUTable': typeof import("../node_modules/@nuxt/ui/dist/runtime/components/Table.vue")['default']
    'LazyUTabs': typeof import("../node_modules/@nuxt/ui/dist/runtime/components/Tabs.vue")['default']
    'LazyUTextarea': typeof import("../node_modules/@nuxt/ui/dist/runtime/components/Textarea.vue")['default']
    'LazyUToast': typeof import("../node_modules/@nuxt/ui/dist/runtime/components/Toast.vue")['default']
    'LazyUToaster': typeof import("../node_modules/@nuxt/ui/dist/runtime/components/Toaster.vue")['default']
    'LazyUTooltip': typeof import("../node_modules/@nuxt/ui/dist/runtime/components/Tooltip.vue")['default']
    'LazyNuxtWelcome': typeof import("../node_modules/nuxt/dist/app/components/welcome.vue")['default']
    'LazyNuxtLayout': typeof import("../node_modules/nuxt/dist/app/components/nuxt-layout")['default']
    'LazyNuxtErrorBoundary': typeof import("../node_modules/nuxt/dist/app/components/nuxt-error-boundary")['default']
    'LazyClientOnly': typeof import("../node_modules/nuxt/dist/app/components/client-only")['default']
    'LazyDevOnly': typeof import("../node_modules/nuxt/dist/app/components/dev-only")['default']
    'LazyServerPlaceholder': typeof import("../node_modules/nuxt/dist/app/components/server-placeholder")['default']
    'LazyNuxtLink': typeof import("../node_modules/nuxt/dist/app/components/nuxt-link")['default']
    'LazyNuxtLoadingIndicator': typeof import("../node_modules/nuxt/dist/app/components/nuxt-loading-indicator")['default']
    'LazyNuxtRouteAnnouncer': typeof import("../node_modules/nuxt/dist/app/components/nuxt-route-announcer")['default']
    'LazyNuxtImg': typeof import("../node_modules/@nuxt/image/dist/runtime/components/NuxtImg.vue")['default']
    'LazyNuxtPicture': typeof import("../node_modules/@nuxt/image/dist/runtime/components/NuxtPicture.vue")['default']
    'LazyIcon': typeof import("../node_modules/@nuxt/icon/dist/runtime/components/index")['default']
    'LazyColorScheme': typeof import("../node_modules/@nuxtjs/color-mode/dist/runtime/component.vue3.vue")['default']
    'LazyNuxtPage': typeof import("../node_modules/nuxt/dist/pages/runtime/page-placeholder")['default']
    'LazyNoScript': typeof import("../node_modules/nuxt/dist/head/runtime/components")['NoScript']
    'LazyLink': typeof import("../node_modules/nuxt/dist/head/runtime/components")['Link']
    'LazyBase': typeof import("../node_modules/nuxt/dist/head/runtime/components")['Base']
    'LazyTitle': typeof import("../node_modules/nuxt/dist/head/runtime/components")['Title']
    'LazyMeta': typeof import("../node_modules/nuxt/dist/head/runtime/components")['Meta']
    'LazyStyle': typeof import("../node_modules/nuxt/dist/head/runtime/components")['Style']
    'LazyHead': typeof import("../node_modules/nuxt/dist/head/runtime/components")['Head']
    'LazyHtml': typeof import("../node_modules/nuxt/dist/head/runtime/components")['Html']
    'LazyBody': typeof import("../node_modules/nuxt/dist/head/runtime/components")['Body']
    'LazyNuxtIsland': typeof import("../node_modules/nuxt/dist/app/components/nuxt-island")['default']
    'LazyNuxtRouteAnnouncer': IslandComponent<typeof import("../node_modules/nuxt/dist/app/components/server-placeholder")['default']>
}

declare module 'vue' {
  export interface GlobalComponents extends _GlobalComponents { }
}

export const UAccordion: typeof import("../node_modules/@nuxt/ui/dist/runtime/components/Accordion.vue")['default']
export const UAlert: typeof import("../node_modules/@nuxt/ui/dist/runtime/components/Alert.vue")['default']
export const UApp: typeof import("../node_modules/@nuxt/ui/dist/runtime/components/App.vue")['default']
export const UAvatar: typeof import("../node_modules/@nuxt/ui/dist/runtime/components/Avatar.vue")['default']
export const UAvatarGroup: typeof import("../node_modules/@nuxt/ui/dist/runtime/components/AvatarGroup.vue")['default']
export const UBadge: typeof import("../node_modules/@nuxt/ui/dist/runtime/components/Badge.vue")['default']
export const UBreadcrumb: typeof import("../node_modules/@nuxt/ui/dist/runtime/components/Breadcrumb.vue")['default']
export const UButton: typeof import("../node_modules/@nuxt/ui/dist/runtime/components/Button.vue")['default']
export const UButtonGroup: typeof import("../node_modules/@nuxt/ui/dist/runtime/components/ButtonGroup.vue")['default']
export const UCard: typeof import("../node_modules/@nuxt/ui/dist/runtime/components/Card.vue")['default']
export const UCarousel: typeof import("../node_modules/@nuxt/ui/dist/runtime/components/Carousel.vue")['default']
export const UCheckbox: typeof import("../node_modules/@nuxt/ui/dist/runtime/components/Checkbox.vue")['default']
export const UChip: typeof import("../node_modules/@nuxt/ui/dist/runtime/components/Chip.vue")['default']
export const UCollapsible: typeof import("../node_modules/@nuxt/ui/dist/runtime/components/Collapsible.vue")['default']
export const UCommandPalette: typeof import("../node_modules/@nuxt/ui/dist/runtime/components/CommandPalette.vue")['default']
export const UContainer: typeof import("../node_modules/@nuxt/ui/dist/runtime/components/Container.vue")['default']
export const UContextMenu: typeof import("../node_modules/@nuxt/ui/dist/runtime/components/ContextMenu.vue")['default']
export const UContextMenuContent: typeof import("../node_modules/@nuxt/ui/dist/runtime/components/ContextMenuContent.vue")['default']
export const UDrawer: typeof import("../node_modules/@nuxt/ui/dist/runtime/components/Drawer.vue")['default']
export const UDropdownMenu: typeof import("../node_modules/@nuxt/ui/dist/runtime/components/DropdownMenu.vue")['default']
export const UDropdownMenuContent: typeof import("../node_modules/@nuxt/ui/dist/runtime/components/DropdownMenuContent.vue")['default']
export const UForm: typeof import("../node_modules/@nuxt/ui/dist/runtime/components/Form.vue")['default']
export const UFormField: typeof import("../node_modules/@nuxt/ui/dist/runtime/components/FormField.vue")['default']
export const UIcon: typeof import("../node_modules/@nuxt/ui/dist/runtime/components/Icon.vue")['default']
export const UInput: typeof import("../node_modules/@nuxt/ui/dist/runtime/components/Input.vue")['default']
export const UInputMenu: typeof import("../node_modules/@nuxt/ui/dist/runtime/components/InputMenu.vue")['default']
export const UInputNumber: typeof import("../node_modules/@nuxt/ui/dist/runtime/components/InputNumber.vue")['default']
export const UKbd: typeof import("../node_modules/@nuxt/ui/dist/runtime/components/Kbd.vue")['default']
export const ULink: typeof import("../node_modules/@nuxt/ui/dist/runtime/components/Link.vue")['default']
export const ULinkBase: typeof import("../node_modules/@nuxt/ui/dist/runtime/components/LinkBase.vue")['default']
export const UModal: typeof import("../node_modules/@nuxt/ui/dist/runtime/components/Modal.vue")['default']
export const UModalProvider: typeof import("../node_modules/@nuxt/ui/dist/runtime/components/ModalProvider.vue")['default']
export const UNavigationMenu: typeof import("../node_modules/@nuxt/ui/dist/runtime/components/NavigationMenu.vue")['default']
export const UPagination: typeof import("../node_modules/@nuxt/ui/dist/runtime/components/Pagination.vue")['default']
export const UPinInput: typeof import("../node_modules/@nuxt/ui/dist/runtime/components/PinInput.vue")['default']
export const UPopover: typeof import("../node_modules/@nuxt/ui/dist/runtime/components/Popover.vue")['default']
export const UProgress: typeof import("../node_modules/@nuxt/ui/dist/runtime/components/Progress.vue")['default']
export const URadioGroup: typeof import("../node_modules/@nuxt/ui/dist/runtime/components/RadioGroup.vue")['default']
export const USelect: typeof import("../node_modules/@nuxt/ui/dist/runtime/components/Select.vue")['default']
export const USelectMenu: typeof import("../node_modules/@nuxt/ui/dist/runtime/components/SelectMenu.vue")['default']
export const USeparator: typeof import("../node_modules/@nuxt/ui/dist/runtime/components/Separator.vue")['default']
export const USkeleton: typeof import("../node_modules/@nuxt/ui/dist/runtime/components/Skeleton.vue")['default']
export const USlideover: typeof import("../node_modules/@nuxt/ui/dist/runtime/components/Slideover.vue")['default']
export const USlideoverProvider: typeof import("../node_modules/@nuxt/ui/dist/runtime/components/SlideoverProvider.vue")['default']
export const USlider: typeof import("../node_modules/@nuxt/ui/dist/runtime/components/Slider.vue")['default']
export const USwitch: typeof import("../node_modules/@nuxt/ui/dist/runtime/components/Switch.vue")['default']
export const UTable: typeof import("../node_modules/@nuxt/ui/dist/runtime/components/Table.vue")['default']
export const UTabs: typeof import("../node_modules/@nuxt/ui/dist/runtime/components/Tabs.vue")['default']
export const UTextarea: typeof import("../node_modules/@nuxt/ui/dist/runtime/components/Textarea.vue")['default']
export const UToast: typeof import("../node_modules/@nuxt/ui/dist/runtime/components/Toast.vue")['default']
export const UToaster: typeof import("../node_modules/@nuxt/ui/dist/runtime/components/Toaster.vue")['default']
export const UTooltip: typeof import("../node_modules/@nuxt/ui/dist/runtime/components/Tooltip.vue")['default']
export const NuxtWelcome: typeof import("../node_modules/nuxt/dist/app/components/welcome.vue")['default']
export const NuxtLayout: typeof import("../node_modules/nuxt/dist/app/components/nuxt-layout")['default']
export const NuxtErrorBoundary: typeof import("../node_modules/nuxt/dist/app/components/nuxt-error-boundary")['default']
export const ClientOnly: typeof import("../node_modules/nuxt/dist/app/components/client-only")['default']
export const DevOnly: typeof import("../node_modules/nuxt/dist/app/components/dev-only")['default']
export const ServerPlaceholder: typeof import("../node_modules/nuxt/dist/app/components/server-placeholder")['default']
export const NuxtLink: typeof import("../node_modules/nuxt/dist/app/components/nuxt-link")['default']
export const NuxtLoadingIndicator: typeof import("../node_modules/nuxt/dist/app/components/nuxt-loading-indicator")['default']
export const NuxtRouteAnnouncer: typeof import("../node_modules/nuxt/dist/app/components/nuxt-route-announcer")['default']
export const NuxtImg: typeof import("../node_modules/@nuxt/image/dist/runtime/components/NuxtImg.vue")['default']
export const NuxtPicture: typeof import("../node_modules/@nuxt/image/dist/runtime/components/NuxtPicture.vue")['default']
export const Icon: typeof import("../node_modules/@nuxt/icon/dist/runtime/components/index")['default']
export const ColorScheme: typeof import("../node_modules/@nuxtjs/color-mode/dist/runtime/component.vue3.vue")['default']
export const NuxtPage: typeof import("../node_modules/nuxt/dist/pages/runtime/page-placeholder")['default']
export const NoScript: typeof import("../node_modules/nuxt/dist/head/runtime/components")['NoScript']
export const Link: typeof import("../node_modules/nuxt/dist/head/runtime/components")['Link']
export const Base: typeof import("../node_modules/nuxt/dist/head/runtime/components")['Base']
export const Title: typeof import("../node_modules/nuxt/dist/head/runtime/components")['Title']
export const Meta: typeof import("../node_modules/nuxt/dist/head/runtime/components")['Meta']
export const Style: typeof import("../node_modules/nuxt/dist/head/runtime/components")['Style']
export const Head: typeof import("../node_modules/nuxt/dist/head/runtime/components")['Head']
export const Html: typeof import("../node_modules/nuxt/dist/head/runtime/components")['Html']
export const Body: typeof import("../node_modules/nuxt/dist/head/runtime/components")['Body']
export const NuxtIsland: typeof import("../node_modules/nuxt/dist/app/components/nuxt-island")['default']
export const NuxtRouteAnnouncer: IslandComponent<typeof import("../node_modules/nuxt/dist/app/components/server-placeholder")['default']>
export const LazyUAccordion: typeof import("../node_modules/@nuxt/ui/dist/runtime/components/Accordion.vue")['default']
export const LazyUAlert: typeof import("../node_modules/@nuxt/ui/dist/runtime/components/Alert.vue")['default']
export const LazyUApp: typeof import("../node_modules/@nuxt/ui/dist/runtime/components/App.vue")['default']
export const LazyUAvatar: typeof import("../node_modules/@nuxt/ui/dist/runtime/components/Avatar.vue")['default']
export const LazyUAvatarGroup: typeof import("../node_modules/@nuxt/ui/dist/runtime/components/AvatarGroup.vue")['default']
export const LazyUBadge: typeof import("../node_modules/@nuxt/ui/dist/runtime/components/Badge.vue")['default']
export const LazyUBreadcrumb: typeof import("../node_modules/@nuxt/ui/dist/runtime/components/Breadcrumb.vue")['default']
export const LazyUButton: typeof import("../node_modules/@nuxt/ui/dist/runtime/components/Button.vue")['default']
export const LazyUButtonGroup: typeof import("../node_modules/@nuxt/ui/dist/runtime/components/ButtonGroup.vue")['default']
export const LazyUCard: typeof import("../node_modules/@nuxt/ui/dist/runtime/components/Card.vue")['default']
export const LazyUCarousel: typeof import("../node_modules/@nuxt/ui/dist/runtime/components/Carousel.vue")['default']
export const LazyUCheckbox: typeof import("../node_modules/@nuxt/ui/dist/runtime/components/Checkbox.vue")['default']
export const LazyUChip: typeof import("../node_modules/@nuxt/ui/dist/runtime/components/Chip.vue")['default']
export const LazyUCollapsible: typeof import("../node_modules/@nuxt/ui/dist/runtime/components/Collapsible.vue")['default']
export const LazyUCommandPalette: typeof import("../node_modules/@nuxt/ui/dist/runtime/components/CommandPalette.vue")['default']
export const LazyUContainer: typeof import("../node_modules/@nuxt/ui/dist/runtime/components/Container.vue")['default']
export const LazyUContextMenu: typeof import("../node_modules/@nuxt/ui/dist/runtime/components/ContextMenu.vue")['default']
export const LazyUContextMenuContent: typeof import("../node_modules/@nuxt/ui/dist/runtime/components/ContextMenuContent.vue")['default']
export const LazyUDrawer: typeof import("../node_modules/@nuxt/ui/dist/runtime/components/Drawer.vue")['default']
export const LazyUDropdownMenu: typeof import("../node_modules/@nuxt/ui/dist/runtime/components/DropdownMenu.vue")['default']
export const LazyUDropdownMenuContent: typeof import("../node_modules/@nuxt/ui/dist/runtime/components/DropdownMenuContent.vue")['default']
export const LazyUForm: typeof import("../node_modules/@nuxt/ui/dist/runtime/components/Form.vue")['default']
export const LazyUFormField: typeof import("../node_modules/@nuxt/ui/dist/runtime/components/FormField.vue")['default']
export const LazyUIcon: typeof import("../node_modules/@nuxt/ui/dist/runtime/components/Icon.vue")['default']
export const LazyUInput: typeof import("../node_modules/@nuxt/ui/dist/runtime/components/Input.vue")['default']
export const LazyUInputMenu: typeof import("../node_modules/@nuxt/ui/dist/runtime/components/InputMenu.vue")['default']
export const LazyUInputNumber: typeof import("../node_modules/@nuxt/ui/dist/runtime/components/InputNumber.vue")['default']
export const LazyUKbd: typeof import("../node_modules/@nuxt/ui/dist/runtime/components/Kbd.vue")['default']
export const LazyULink: typeof import("../node_modules/@nuxt/ui/dist/runtime/components/Link.vue")['default']
export const LazyULinkBase: typeof import("../node_modules/@nuxt/ui/dist/runtime/components/LinkBase.vue")['default']
export const LazyUModal: typeof import("../node_modules/@nuxt/ui/dist/runtime/components/Modal.vue")['default']
export const LazyUModalProvider: typeof import("../node_modules/@nuxt/ui/dist/runtime/components/ModalProvider.vue")['default']
export const LazyUNavigationMenu: typeof import("../node_modules/@nuxt/ui/dist/runtime/components/NavigationMenu.vue")['default']
export const LazyUPagination: typeof import("../node_modules/@nuxt/ui/dist/runtime/components/Pagination.vue")['default']
export const LazyUPinInput: typeof import("../node_modules/@nuxt/ui/dist/runtime/components/PinInput.vue")['default']
export const LazyUPopover: typeof import("../node_modules/@nuxt/ui/dist/runtime/components/Popover.vue")['default']
export const LazyUProgress: typeof import("../node_modules/@nuxt/ui/dist/runtime/components/Progress.vue")['default']
export const LazyURadioGroup: typeof import("../node_modules/@nuxt/ui/dist/runtime/components/RadioGroup.vue")['default']
export const LazyUSelect: typeof import("../node_modules/@nuxt/ui/dist/runtime/components/Select.vue")['default']
export const LazyUSelectMenu: typeof import("../node_modules/@nuxt/ui/dist/runtime/components/SelectMenu.vue")['default']
export const LazyUSeparator: typeof import("../node_modules/@nuxt/ui/dist/runtime/components/Separator.vue")['default']
export const LazyUSkeleton: typeof import("../node_modules/@nuxt/ui/dist/runtime/components/Skeleton.vue")['default']
export const LazyUSlideover: typeof import("../node_modules/@nuxt/ui/dist/runtime/components/Slideover.vue")['default']
export const LazyUSlideoverProvider: typeof import("../node_modules/@nuxt/ui/dist/runtime/components/SlideoverProvider.vue")['default']
export const LazyUSlider: typeof import("../node_modules/@nuxt/ui/dist/runtime/components/Slider.vue")['default']
export const LazyUSwitch: typeof import("../node_modules/@nuxt/ui/dist/runtime/components/Switch.vue")['default']
export const LazyUTable: typeof import("../node_modules/@nuxt/ui/dist/runtime/components/Table.vue")['default']
export const LazyUTabs: typeof import("../node_modules/@nuxt/ui/dist/runtime/components/Tabs.vue")['default']
export const LazyUTextarea: typeof import("../node_modules/@nuxt/ui/dist/runtime/components/Textarea.vue")['default']
export const LazyUToast: typeof import("../node_modules/@nuxt/ui/dist/runtime/components/Toast.vue")['default']
export const LazyUToaster: typeof import("../node_modules/@nuxt/ui/dist/runtime/components/Toaster.vue")['default']
export const LazyUTooltip: typeof import("../node_modules/@nuxt/ui/dist/runtime/components/Tooltip.vue")['default']
export const LazyNuxtWelcome: typeof import("../node_modules/nuxt/dist/app/components/welcome.vue")['default']
export const LazyNuxtLayout: typeof import("../node_modules/nuxt/dist/app/components/nuxt-layout")['default']
export const LazyNuxtErrorBoundary: typeof import("../node_modules/nuxt/dist/app/components/nuxt-error-boundary")['default']
export const LazyClientOnly: typeof import("../node_modules/nuxt/dist/app/components/client-only")['default']
export const LazyDevOnly: typeof import("../node_modules/nuxt/dist/app/components/dev-only")['default']
export const LazyServerPlaceholder: typeof import("../node_modules/nuxt/dist/app/components/server-placeholder")['default']
export const LazyNuxtLink: typeof import("../node_modules/nuxt/dist/app/components/nuxt-link")['default']
export const LazyNuxtLoadingIndicator: typeof import("../node_modules/nuxt/dist/app/components/nuxt-loading-indicator")['default']
export const LazyNuxtRouteAnnouncer: typeof import("../node_modules/nuxt/dist/app/components/nuxt-route-announcer")['default']
export const LazyNuxtImg: typeof import("../node_modules/@nuxt/image/dist/runtime/components/NuxtImg.vue")['default']
export const LazyNuxtPicture: typeof import("../node_modules/@nuxt/image/dist/runtime/components/NuxtPicture.vue")['default']
export const LazyIcon: typeof import("../node_modules/@nuxt/icon/dist/runtime/components/index")['default']
export const LazyColorScheme: typeof import("../node_modules/@nuxtjs/color-mode/dist/runtime/component.vue3.vue")['default']
export const LazyNuxtPage: typeof import("../node_modules/nuxt/dist/pages/runtime/page-placeholder")['default']
export const LazyNoScript: typeof import("../node_modules/nuxt/dist/head/runtime/components")['NoScript']
export const LazyLink: typeof import("../node_modules/nuxt/dist/head/runtime/components")['Link']
export const LazyBase: typeof import("../node_modules/nuxt/dist/head/runtime/components")['Base']
export const LazyTitle: typeof import("../node_modules/nuxt/dist/head/runtime/components")['Title']
export const LazyMeta: typeof import("../node_modules/nuxt/dist/head/runtime/components")['Meta']
export const LazyStyle: typeof import("../node_modules/nuxt/dist/head/runtime/components")['Style']
export const LazyHead: typeof import("../node_modules/nuxt/dist/head/runtime/components")['Head']
export const LazyHtml: typeof import("../node_modules/nuxt/dist/head/runtime/components")['Html']
export const LazyBody: typeof import("../node_modules/nuxt/dist/head/runtime/components")['Body']
export const LazyNuxtIsland: typeof import("../node_modules/nuxt/dist/app/components/nuxt-island")['default']
export const LazyNuxtRouteAnnouncer: IslandComponent<typeof import("../node_modules/nuxt/dist/app/components/server-placeholder")['default']>

export const componentNames: string[]
