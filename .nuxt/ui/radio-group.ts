export default {
  "slots": {
    "root": "relative",
    "fieldset": "flex",
    "legend": "mb-1 block font-medium text-[var(--ui-text)]",
    "item": "flex items-start",
    "base": "rounded-full ring ring-inset ring-[var(--ui-border-accented)] focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-offset-[var(--ui-bg)]",
    "indicator": "flex items-center justify-center size-full rounded-full after:bg-[var(--ui-bg)] after:rounded-full",
    "container": "flex items-center",
    "wrapper": "ms-2",
    "label": "block font-medium text-[var(--ui-text)]",
    "description": "text-[var(--ui-text-muted)]"
  },
  "variants": {
    "color": {
      "primary": {
        "base": "focus-visible:outline-[var(--ui-primary)]",
        "indicator": "bg-[var(--ui-primary)]"
      },
      "secondary": {
        "base": "focus-visible:outline-[var(--ui-secondary)]",
        "indicator": "bg-[var(--ui-secondary)]"
      },
      "success": {
        "base": "focus-visible:outline-[var(--ui-success)]",
        "indicator": "bg-[var(--ui-success)]"
      },
      "info": {
        "base": "focus-visible:outline-[var(--ui-info)]",
        "indicator": "bg-[var(--ui-info)]"
      },
      "warning": {
        "base": "focus-visible:outline-[var(--ui-warning)]",
        "indicator": "bg-[var(--ui-warning)]"
      },
      "error": {
        "base": "focus-visible:outline-[var(--ui-error)]",
        "indicator": "bg-[var(--ui-error)]"
      },
      "neutral": {
        "base": "focus-visible:outline-[var(--ui-border-inverted)]",
        "indicator": "bg-[var(--ui-bg-inverted)]"
      }
    },
    "orientation": {
      "horizontal": {
        "fieldset": "flex-row",
        "wrapper": "me-2"
      },
      "vertical": {
        "fieldset": "flex-col"
      }
    },
    "size": {
      "xs": {
        "fieldset": "gap-0.5",
        "legend": "text-xs",
        "base": "size-3",
        "item": "text-xs",
        "container": "h-4",
        "indicator": "after:size-1"
      },
      "sm": {
        "fieldset": "gap-0.5",
        "legend": "text-xs",
        "base": "size-3.5",
        "item": "text-xs",
        "container": "h-4",
        "indicator": "after:size-1"
      },
      "md": {
        "fieldset": "gap-1",
        "legend": "text-sm",
        "base": "size-4",
        "item": "text-sm",
        "container": "h-5",
        "indicator": "after:size-1.5"
      },
      "lg": {
        "fieldset": "gap-1",
        "legend": "text-sm",
        "base": "size-4.5",
        "item": "text-sm",
        "container": "h-5",
        "indicator": "after:size-1.5"
      },
      "xl": {
        "fieldset": "gap-1.5",
        "legend": "text-base",
        "base": "size-5",
        "item": "text-base",
        "container": "h-6",
        "indicator": "after:size-2"
      }
    },
    "disabled": {
      "true": {
        "base": "cursor-not-allowed opacity-75",
        "label": "cursor-not-allowed opacity-75"
      }
    },
    "required": {
      "true": {
        "legend": "after:content-['*'] after:ms-0.5 after:text-[var(--ui-error)]"
      }
    }
  },
  "defaultVariants": {
    "size": "md" as const,
    "color": "primary" as const
  }
}