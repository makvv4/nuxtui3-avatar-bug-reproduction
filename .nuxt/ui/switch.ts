export default {
  "slots": {
    "root": "relative flex items-start",
    "base": [
      "inline-flex items-center shrink-0 rounded-full border-2 border-transparent focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-offset-2 focus-visible:ring-offset-[var(--ui-bg)] data-[state=unchecked]:bg-[var(--ui-bg-accented)]",
      "transition-colors duration-200"
    ],
    "container": "flex items-center",
    "thumb": "group pointer-events-none block rounded-full bg-[var(--ui-bg)] shadow-lg ring-0 transition-transform duration-200 data-[state=unchecked]:translate-x-0 data-[state=unchecked]:rtl:-translate-x-0 flex items-center justify-center",
    "icon": [
      "absolute shrink-0 group-data-[state=unchecked]:text-[var(--ui-text-dimmed)] opacity-0 size-10/12",
      "transition-[color,opacity] duration-200"
    ],
    "wrapper": "ms-2",
    "label": "block font-medium text-[var(--ui-text)]",
    "description": "text-[var(--ui-text-muted)]"
  },
  "variants": {
    "color": {
      "primary": {
        "base": "data-[state=checked]:bg-[var(--ui-primary)] focus-visible:ring-[var(--ui-primary)]",
        "icon": "group-data-[state=checked]:text-[var(--ui-primary)]"
      },
      "secondary": {
        "base": "data-[state=checked]:bg-[var(--ui-secondary)] focus-visible:ring-[var(--ui-secondary)]",
        "icon": "group-data-[state=checked]:text-[var(--ui-secondary)]"
      },
      "success": {
        "base": "data-[state=checked]:bg-[var(--ui-success)] focus-visible:ring-[var(--ui-success)]",
        "icon": "group-data-[state=checked]:text-[var(--ui-success)]"
      },
      "info": {
        "base": "data-[state=checked]:bg-[var(--ui-info)] focus-visible:ring-[var(--ui-info)]",
        "icon": "group-data-[state=checked]:text-[var(--ui-info)]"
      },
      "warning": {
        "base": "data-[state=checked]:bg-[var(--ui-warning)] focus-visible:ring-[var(--ui-warning)]",
        "icon": "group-data-[state=checked]:text-[var(--ui-warning)]"
      },
      "error": {
        "base": "data-[state=checked]:bg-[var(--ui-error)] focus-visible:ring-[var(--ui-error)]",
        "icon": "group-data-[state=checked]:text-[var(--ui-error)]"
      },
      "neutral": {
        "base": "data-[state=checked]:bg-[var(--ui-bg-inverted)] focus-visible:ring-[var(--ui-border-inverted)]",
        "icon": "group-data-[state=checked]:text-[var(--ui-text-highlighted)]"
      }
    },
    "size": {
      "xs": {
        "base": "w-7",
        "container": "h-4",
        "thumb": "size-3 data-[state=checked]:translate-x-3 data-[state=checked]:rtl:-translate-x-3",
        "wrapper": "text-xs"
      },
      "sm": {
        "base": "w-8",
        "container": "h-4",
        "thumb": "size-3.5 data-[state=checked]:translate-x-3.5 data-[state=checked]:rtl:-translate-x-3.5",
        "wrapper": "text-xs"
      },
      "md": {
        "base": "w-9",
        "container": "h-5",
        "thumb": "size-4 data-[state=checked]:translate-x-4 data-[state=checked]:rtl:-translate-x-4",
        "wrapper": "text-sm"
      },
      "lg": {
        "base": "w-10",
        "container": "h-5",
        "thumb": "size-4.5 data-[state=checked]:translate-x-4.5 data-[state=checked]:rtl:-translate-x-4.5",
        "wrapper": "text-sm"
      },
      "xl": {
        "base": "w-11",
        "container": "h-6",
        "thumb": "size-5 data-[state=checked]:translate-x-5 data-[state=checked]:rtl:-translate-x-5",
        "wrapper": "text-base"
      }
    },
    "checked": {
      "true": {
        "icon": "group-data-[state=checked]:opacity-100"
      }
    },
    "unchecked": {
      "true": {
        "icon": "group-data-[state=unchecked]:opacity-100"
      }
    },
    "loading": {
      "true": {
        "icon": "animate-spin"
      }
    },
    "required": {
      "true": {
        "label": "after:content-['*'] after:ms-0.5 after:text-[var(--ui-error)]"
      }
    },
    "disabled": {
      "true": {
        "base": "cursor-not-allowed opacity-75",
        "label": "cursor-not-allowed opacity-75",
        "description": "cursor-not-allowed opacity-75"
      }
    }
  },
  "defaultVariants": {
    "color": "primary" as const,
    "size": "md" as const
  }
}