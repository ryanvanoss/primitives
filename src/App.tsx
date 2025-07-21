import * as Accordion from "@radix-ui/react-accordion";
import {
  ArrowRight,
  Box,
  ChevronDown,
  ChevronUp,
  Circle,
  CircleDot,
  Code2,
  Container,
  Cpu,
  Crown,
  Database,
  DatabaseBackup,
  Diamond,
  FileCode,
  Heart,
  HeartHandshake,
  Layers,
  Minus,
  MousePointer,
  Music,
  Music2,
  Palette,
  Pause,
  Play,
  Plus,
  Smile,
  SmilePlus,
  Sparkle,
  Sparkles,
  Square,
  SquareCheck,
  Star,
  StarOff,
  Terminal,
  Triangle,
  Wifi,
  WifiOff,
  Zap,
  ZapOff,
} from "lucide-react";
import React from "react";

// Brand Identity Configurations
const brands = {
  modern: {
    name: "Modern Tech",
    colors: {
      primary: "bg-blue-500",
      secondary: "bg-blue-100",
      accent: "bg-cyan-400",
      text: "text-slate-900",
      textLight: "text-slate-600",
      border: "border-blue-200",
      hover: "hover:bg-blue-50",
    },
    fonts: {
      heading: "font-sans font-bold tracking-tight",
      body: "font-sans",
    },
    rounded: "rounded-lg",
    shadow: "shadow-sm",
  },
  elegant: {
    name: "Elegant Luxe",
    colors: {
      primary: "bg-purple-600",
      secondary: "bg-purple-50",
      accent: "bg-gold-500",
      text: "text-gray-800",
      textLight: "text-gray-600",
      border: "border-purple-200",
      hover: "hover:bg-purple-50",
    },
    fonts: {
      heading: "font-serif font-medium tracking-wide",
      body: "font-serif",
    },
    rounded: "rounded-none",
    shadow: "shadow-md",
  },
  playful: {
    name: "Playful Pop",
    colors: {
      primary: "bg-pink-500",
      secondary: "bg-yellow-100",
      accent: "bg-green-400",
      text: "text-gray-900",
      textLight: "text-gray-700",
      border: "border-pink-300",
      hover: "hover:bg-yellow-50",
    },
    fonts: {
      heading: "font-mono font-bold",
      body: "font-sans",
    },
    rounded: "rounded-2xl",
    shadow: "shadow-lg",
  },
};

// Primitive Label Component
interface PrimitiveLabelProps {
  name: string;
  icon: React.ElementType;
  color: string;
  position?:
    | "top-left"
    | "top-right"
    | "bottom-left"
    | "bottom-right"
    | "top-center";
}

const PrimitiveLabel = ({
  name,
  icon: Icon,
  color,
  position = "top-left",
}: PrimitiveLabelProps) => {
  const positionClasses: Record<string, string> = {
    "top-left": "-top-3 -left-1",
    "top-right": "-top-3 -right-1",
    "bottom-left": "-bottom-3 -left-1",
    "bottom-right": "-bottom-3 -right-1",
    "top-center": "-top-3 left-1/2 -translate-x-1/2",
  };

  return (
    <div
      className={`absolute ${positionClasses[position]} z-20 pointer-events-none`}
    >
      <div
        className={`inline-flex items-center gap-1 px-2 py-0.5 text-xs font-mono ${color} bg-white rounded-full shadow-sm border`}
      >
        <Icon className="w-3 h-3" />
        <span>{name}</span>
      </div>
    </div>
  );
};

// Types for accordion items
interface AccordionItem {
  title: string;
  content: string;
}

interface AccordionProps {
  items: AccordionItem[];
  showPrimitives: boolean;
}

// Unstyled Accordion Variants - Raw Radix Primitives
const UnstyledAccordionVariant1 = ({
  items,
  showPrimitives,
}: AccordionProps) => {
  const [openItems, setOpenItems] = React.useState<string[]>([]);

  return (
    <div
      style={
        showPrimitives
          ? {
              position: "relative",
              padding: "16px",
              border: "2px dashed purple",
              borderRadius: "12px",
            }
          : {}
      }
    >
      {showPrimitives && (
        <PrimitiveLabel name="Root" icon={Container} color="text-purple-600" />
      )}
      <Accordion.Root
        type="multiple"
        value={openItems}
        onValueChange={setOpenItems}
      >
        {items.map((item: AccordionItem, index: number) => (
          <div
            key={index}
            style={
              showPrimitives
                ? {
                    position: "relative",
                    padding: "8px",
                    border: "2px dashed blue",
                    borderRadius: "8px",
                    marginBottom: "8px",
                  }
                : {}
            }
          >
            {showPrimitives && (
              <PrimitiveLabel name="Item" icon={Box} color="text-blue-600" />
            )}
            <Accordion.Item value={`item-${index}`}>
              <div
                style={
                  showPrimitives
                    ? { position: "relative", border: "2px dashed green" }
                    : {}
                }
              >
                {showPrimitives && (
                  <PrimitiveLabel
                    name="Header"
                    icon={Layers}
                    color="text-green-600"
                    position="top-right"
                  />
                )}
                <Accordion.Header>
                  <div
                    style={
                      showPrimitives
                        ? { position: "relative", border: "2px dashed orange" }
                        : {}
                    }
                  >
                    {showPrimitives && (
                      <PrimitiveLabel
                        name="Trigger"
                        icon={MousePointer}
                        color="text-orange-600"
                        position="top-center"
                      />
                    )}
                    <Accordion.Trigger>
                      {item.title}{" "}
                      {openItems.includes(`item-${index}`) ? "−" : "+"}
                    </Accordion.Trigger>
                    <h4 className="font-semibold text-gray-800">
                      Unstyled Foundation:
                    </h4>
                    <p>
                      The unstyled section demonstrates Radix UI's zero-styling
                      philosophy - primitives provide behavior and
                      accessibility, you provide the design.
                    </p>
                  </div>
                </Accordion.Header>
              </div>
              <div
                style={
                  showPrimitives && openItems.includes(`item-${index}`)
                    ? {
                        position: "relative",
                        border: "2px dashed red",
                        borderTop: "none",
                      }
                    : {}
                }
              >
                {showPrimitives && openItems.includes(`item-${index}`) && (
                  <PrimitiveLabel
                    name="Content"
                    icon={FileCode}
                    color="text-red-600"
                    position="bottom-right"
                  />
                )}
                <Accordion.Content>{item.content}</Accordion.Content>
              </div>
            </Accordion.Item>
          </div>
        ))}
      </Accordion.Root>
    </div>
  );
};

const UnstyledAccordionVariant2 = ({
  items,
  showPrimitives,
}: AccordionProps) => {
  const [openItems, setOpenItems] = React.useState<string[]>(["item-0"]);

  return (
    <div
      style={
        showPrimitives
          ? {
              position: "relative",
              padding: "16px",
              border: "2px dashed purple",
              borderRadius: "12px",
            }
          : {}
      }
    >
      {showPrimitives && (
        <PrimitiveLabel name="Root" icon={Container} color="text-purple-600" />
      )}
      <Accordion.Root
        type="single"
        value={openItems[0]}
        onValueChange={(value) => setOpenItems(value ? [value] : [])}
      >
        {items.map((item: AccordionItem, index: number) => (
          <div
            key={index}
            style={
              showPrimitives
                ? {
                    position: "relative",
                    border: "2px dashed blue",
                    margin: "8px",
                  }
                : {}
            }
          >
            {showPrimitives && (
              <PrimitiveLabel name="Item" icon={Box} color="text-blue-600" />
            )}
            <Accordion.Item value={`item-${index}`}>
              <div
                style={
                  showPrimitives
                    ? { position: "relative", border: "2px dashed green" }
                    : {}
                }
              >
                {showPrimitives && (
                  <PrimitiveLabel
                    name="Header"
                    icon={Layers}
                    color="text-green-600"
                    position="top-right"
                  />
                )}
                <Accordion.Header>
                  <div
                    style={
                      showPrimitives
                        ? { position: "relative", border: "2px dashed orange" }
                        : {}
                    }
                  >
                    {showPrimitives && (
                      <PrimitiveLabel
                        name="Trigger"
                        icon={MousePointer}
                        color="text-orange-600"
                        position="top-center"
                      />
                    )}
                    <Accordion.Trigger>
                      → {item.title} [
                      {openItems.includes(`item-${index}`) ? "Open" : "Closed"}]
                    </Accordion.Trigger>
                  </div>
                </Accordion.Header>
              </div>
              <div
                style={
                  showPrimitives && openItems.includes(`item-${index}`)
                    ? {
                        position: "relative",
                        border: "2px dashed red",
                        borderTop: "none",
                      }
                    : {}
                }
              >
                {showPrimitives && openItems.includes(`item-${index}`) && (
                  <PrimitiveLabel
                    name="Content"
                    icon={FileCode}
                    color="text-red-600"
                    position="bottom-right"
                  />
                )}
                <Accordion.Content>{item.content}</Accordion.Content>
              </div>
            </Accordion.Item>
          </div>
        ))}
      </Accordion.Root>
    </div>
  );
};

const UnstyledAccordionVariant3 = ({
  items,
  showPrimitives,
}: AccordionProps) => {
  const [openItems, setOpenItems] = React.useState<string[]>([]);

  return (
    <div
      style={
        showPrimitives
          ? {
              position: "relative",
              padding: "16px",
              border: "2px dashed purple",
              borderRadius: "12px",
            }
          : {}
      }
    >
      {showPrimitives && (
        <PrimitiveLabel name="Root" icon={Container} color="text-purple-600" />
      )}
      <Accordion.Root
        type="multiple"
        value={openItems}
        onValueChange={setOpenItems}
      >
        {items.map((item, index) => {
          const isOpen = openItems.includes(`item-${index}`);
          return (
            <div
              key={index}
              style={
                showPrimitives
                  ? {
                      position: "relative",
                      padding: "8px",
                      border: "2px dashed blue",
                      borderRadius: "8px",
                      marginBottom: "8px",
                    }
                  : {}
              }
            >
              {showPrimitives && (
                <PrimitiveLabel name="Item" icon={Box} color="text-blue-600" />
              )}
              <Accordion.Item value={`item-${index}`}>
                <div
                  style={
                    showPrimitives
                      ? {
                          position: "relative",
                          border: "2px dashed green",
                          borderRadius: "8px",
                        }
                      : {}
                  }
                >
                  {showPrimitives && (
                    <PrimitiveLabel
                      name="Header"
                      icon={Layers}
                      color="text-green-600"
                      position="top-right"
                    />
                  )}
                  <Accordion.Header>
                    <div
                      style={
                        showPrimitives
                          ? {
                              position: "relative",
                              border: "2px dashed orange",
                              borderRadius: "8px",
                            }
                          : {}
                      }
                    >
                      {showPrimitives && (
                        <PrimitiveLabel
                          name="Trigger"
                          icon={MousePointer}
                          color="text-orange-600"
                          position="top-center"
                        />
                      )}
                      <Accordion.Trigger>
                        {item.title} {isOpen ? "◇" : "◆"}
                      </Accordion.Trigger>
                    </div>
                  </Accordion.Header>
                </div>
                <div
                  style={
                    showPrimitives && isOpen
                      ? {
                          position: "relative",
                          border: "2px dashed red",
                          borderRadius: "8px",
                          marginTop: "4px",
                        }
                      : {}
                  }
                >
                  {showPrimitives && isOpen && (
                    <PrimitiveLabel
                      name="Content"
                      icon={FileCode}
                      color="text-red-600"
                      position="bottom-right"
                    />
                  )}
                  <Accordion.Content>{item.content}</Accordion.Content>
                </div>
              </Accordion.Item>
            </div>
          );
        })}
      </Accordion.Root>
    </div>
  );
};

// Brand types
interface Brand {
  name: string;
  colors: {
    primary: string;
    secondary: string;
    accent: string;
    text: string;
    textLight: string;
    border: string;
    hover: string;
  };
  fonts: {
    heading: string;
    body: string;
  };
  rounded: string;
  shadow: string;
}

interface BrandAccordionProps extends AccordionProps {
  brand: Brand;
  brandKey: string;
}

// Accordion Variants with Primitive Outlines
const AccordionVariant1 = ({
  brand,
  brandKey,
  items,
  showPrimitives,
}: BrandAccordionProps) => {
  const [openItems, setOpenItems] = React.useState<string[]>([]);

  // Brand-specific icons for Variant 1
  const getIcons = () => {
    switch (brandKey) {
      case "modern":
        return { open: ChevronUp, closed: ChevronDown };
      case "elegant":
        return { open: Sparkles, closed: Sparkle };
      case "playful":
        return { open: SmilePlus, closed: Smile };
      default:
        return { open: Minus, closed: Plus };
    }
  };

  const icons = getIcons();

  return (
    <div
      className={`relative ${showPrimitives ? "p-4 border-2 border-dashed border-purple-400 rounded-xl" : ""}`}
    >
      {showPrimitives && (
        <PrimitiveLabel name="Root" icon={Container} color="text-purple-600" />
      )}
      <Accordion.Root
        type="multiple"
        value={openItems}
        onValueChange={setOpenItems}
        className="w-full space-y-2"
      >
        {items.map((item: AccordionItem, index: number) => (
          <div
            key={index}
            className={`relative ${showPrimitives ? "p-2 border-2 border-dashed border-blue-400 rounded-lg" : ""}`}
          >
            {showPrimitives && (
              <PrimitiveLabel name="Item" icon={Box} color="text-blue-600" />
            )}
            <Accordion.Item
              value={`item-${index}`}
              className={`border ${brand.colors.border} ${brand.rounded} overflow-hidden ${brand.shadow}`}
            >
              <div
                className={`relative ${showPrimitives ? "border-2 border-dashed border-green-400" : ""}`}
              >
                {showPrimitives && (
                  <PrimitiveLabel
                    name="Header"
                    icon={Layers}
                    color="text-green-600"
                    position="top-right"
                  />
                )}
                <Accordion.Header>
                  <div
                    className={`relative ${showPrimitives ? "border-2 border-dashed border-orange-400" : ""}`}
                  >
                    {showPrimitives && (
                      <PrimitiveLabel
                        name="Trigger"
                        icon={MousePointer}
                        color="text-orange-600"
                        position="top-center"
                      />
                    )}
                    <Accordion.Trigger
                      className={`w-full px-4 py-3 flex items-center justify-between ${brand.colors.hover} transition-colors ${brand.fonts.heading} ${brand.colors.text}`}
                    >
                      <span>{item.title}</span>
                      <span className="transition-transform duration-200">
                        {openItems.includes(`item-${index}`) ? (
                          <icons.open className="w-5 h-5" />
                        ) : (
                          <icons.closed className="w-5 h-5" />
                        )}
                      </span>
                    </Accordion.Trigger>
                  </div>
                </Accordion.Header>
              </div>
              <div
                className={`relative ${showPrimitives && openItems.includes(`item-${index}`) ? "border-2 border-t-0 border-dashed border-red-400" : ""}`}
              >
                {showPrimitives && openItems.includes(`item-${index}`) && (
                  <PrimitiveLabel
                    name="Content"
                    icon={FileCode}
                    color="text-red-600"
                    position="bottom-right"
                  />
                )}
                <Accordion.Content
                  className={`px-4 pb-3 ${brand.fonts.body} ${brand.colors.textLight}`}
                >
                  {item.content}
                </Accordion.Content>
              </div>
            </Accordion.Item>
          </div>
        ))}
      </Accordion.Root>
    </div>
  );
};

const AccordionVariant2 = ({
  brand,
  brandKey,
  items,
  showPrimitives,
}: BrandAccordionProps) => {
  const [openItems, setOpenItems] = React.useState<string[]>(["item-0"]);

  // Brand-specific icons for Variant 2
  const getIcon = () => {
    switch (brandKey) {
      case "modern":
        return openItems.length > 0 ? Terminal : Code2;
      case "elegant":
        return Diamond;
      case "playful":
        return openItems.length > 0 ? Pause : Play;
      default:
        return ArrowRight;
    }
  };

  const Icon = getIcon();

  return (
    <div
      className={`relative ${showPrimitives ? "p-4 border-2 border-dashed border-purple-400 rounded-xl" : ""}`}
    >
      {showPrimitives && (
        <PrimitiveLabel name="Root" icon={Container} color="text-purple-600" />
      )}
      <Accordion.Root
        type="single"
        value={openItems[0]}
        onValueChange={(value) => setOpenItems(value ? [value] : [])}
        className={`w-full border ${brand.colors.border} ${brand.rounded} ${brand.shadow} overflow-hidden`}
      >
        {items.map((item: AccordionItem, index: number) => (
          <div
            key={index}
            className={`relative ${showPrimitives ? "border-2 border-dashed border-blue-400 m-2" : ""}`}
          >
            {showPrimitives && (
              <PrimitiveLabel name="Item" icon={Box} color="text-blue-600" />
            )}
            <Accordion.Item
              value={`item-${index}`}
              className={index > 0 ? `border-t ${brand.colors.border}` : ""}
            >
              <div
                className={`relative ${showPrimitives ? "border-2 border-dashed border-green-400" : ""}`}
              >
                {showPrimitives && (
                  <PrimitiveLabel
                    name="Header"
                    icon={Layers}
                    color="text-green-600"
                    position="top-right"
                  />
                )}
                <Accordion.Header>
                  <div
                    className={`relative ${showPrimitives ? "border-2 border-dashed border-orange-400" : ""}`}
                  >
                    {showPrimitives && (
                      <PrimitiveLabel
                        name="Trigger"
                        icon={MousePointer}
                        color="text-orange-600"
                        position="top-center"
                      />
                    )}
                    <Accordion.Trigger
                      className={`w-full px-4 py-3 flex items-center gap-3 ${brand.colors.hover} transition-all ${brand.fonts.heading} ${brand.colors.text} text-left`}
                    >
                      <span
                        className={`transition-transform duration-200 ${
                          openItems.includes(`item-${index}`)
                            ? brandKey === "elegant"
                              ? "rotate-45"
                              : brandKey === "modern"
                                ? ""
                                : "scale-110"
                            : ""
                        }`}
                      >
                        {brandKey === "modern" &&
                        openItems.includes(`item-${index}`) ? (
                          <Terminal className="w-4 h-4" />
                        ) : brandKey === "playful" &&
                          openItems.includes(`item-${index}`) ? (
                          <Pause className="w-4 h-4" />
                        ) : (
                          <Icon className="w-4 h-4" />
                        )}
                      </span>
                      <span className="flex-1">{item.title}</span>
                      <span
                        className={`text-xs px-2 py-1 ${brand.colors.secondary} ${brand.rounded} ${brand.colors.textLight}`}
                      >
                        {openItems.includes(`item-${index}`)
                          ? "Open"
                          : "Closed"}
                      </span>
                    </Accordion.Trigger>
                  </div>
                </Accordion.Header>
              </div>
              <div
                className={`relative ${showPrimitives && openItems.includes(`item-${index}`) ? "border-2 border-t-0 border-dashed border-red-400" : ""}`}
              >
                {showPrimitives && openItems.includes(`item-${index}`) && (
                  <PrimitiveLabel
                    name="Content"
                    icon={FileCode}
                    color="text-red-600"
                    position="bottom-right"
                  />
                )}
                <Accordion.Content
                  className={`px-4 pb-3 pl-11 ${brand.fonts.body} ${brand.colors.textLight}`}
                >
                  {item.content}
                </Accordion.Content>
              </div>
            </Accordion.Item>
          </div>
        ))}
      </Accordion.Root>
    </div>
  );
};

const AccordionVariant3 = ({
  brand,
  brandKey,
  items,
  showPrimitives,
}: BrandAccordionProps) => {
  const [openItems, setOpenItems] = React.useState<string[]>([]);

  const getIcon = (isOpen: boolean, index: number) => {
    // Brand-specific icon sets for Variant 3
    const brandIcons: Record<
      string,
      Array<{ closed: React.ElementType; open: React.ElementType }>
    > = {
      modern: [
        { closed: Cpu, open: Cpu },
        { closed: Wifi, open: WifiOff },
        { closed: Database, open: DatabaseBackup },
      ],
      elegant: [
        { closed: Star, open: StarOff },
        { closed: Heart, open: HeartHandshake },
        { closed: Crown, open: Diamond },
      ],
      playful: [
        { closed: Zap, open: ZapOff },
        { closed: Palette, open: Music },
        { closed: Music2, open: Smile },
      ],
    };

    const icons = brandIcons[brandKey] || [
      { closed: Circle, open: CircleDot },
      { closed: Square, open: SquareCheck },
      { closed: Triangle, open: Diamond },
    ];

    const iconSet = icons[index % icons.length];
    const Icon = isOpen ? iconSet.open : iconSet.closed;
    return <Icon className="w-5 h-5" />;
  };

  return (
    <div
      className={`relative ${showPrimitives ? "p-4 border-2 border-dashed border-purple-400 rounded-xl" : ""}`}
    >
      {showPrimitives && (
        <PrimitiveLabel name="Root" icon={Container} color="text-purple-600" />
      )}
      <Accordion.Root
        type="multiple"
        value={openItems}
        onValueChange={setOpenItems}
        className="w-full space-y-3"
      >
        {items.map((item, index) => {
          const isOpen = openItems.includes(`item-${index}`);
          return (
            <div
              key={index}
              className={`relative ${showPrimitives ? "p-2 border-2 border-dashed border-blue-400 rounded-lg" : ""}`}
            >
              {showPrimitives && (
                <PrimitiveLabel name="Item" icon={Box} color="text-blue-600" />
              )}
              <Accordion.Item value={`item-${index}`} className="w-full">
                <div
                  className={`relative ${showPrimitives ? "border-2 border-dashed border-green-400 rounded-lg" : ""}`}
                >
                  {showPrimitives && (
                    <PrimitiveLabel
                      name="Header"
                      icon={Layers}
                      color="text-green-600"
                      position="top-right"
                    />
                  )}
                  <Accordion.Header>
                    <div
                      className={`relative ${showPrimitives ? "border-2 border-dashed border-orange-400 rounded-lg" : ""}`}
                    >
                      {showPrimitives && (
                        <PrimitiveLabel
                          name="Trigger"
                          icon={MousePointer}
                          color="text-orange-600"
                          position="top-center"
                        />
                      )}
                      <Accordion.Trigger
                        className={`w-full p-4 ${brand.rounded} ${brand.shadow} ${isOpen ? brand.colors.primary : brand.colors.secondary} transition-all duration-300 ${brand.fonts.heading} ${isOpen ? "text-white" : brand.colors.text}`}
                      >
                        <div className="flex items-center justify-between">
                          <span>{item.title}</span>
                          <span
                            className={`transition-all duration-300 ${isOpen ? "rotate-180" : ""}`}
                          >
                            {getIcon(isOpen, index)}
                          </span>
                        </div>
                      </Accordion.Trigger>
                    </div>
                  </Accordion.Header>
                </div>
                <div
                  className={`relative ${showPrimitives && isOpen ? "border-2 border-dashed border-red-400 rounded-lg mt-1" : ""}`}
                >
                  {showPrimitives && isOpen && (
                    <PrimitiveLabel
                      name="Content"
                      icon={FileCode}
                      color="text-red-600"
                      position="bottom-right"
                    />
                  )}
                  <Accordion.Content
                    className={`mt-2 p-4 ${brand.colors.secondary} ${brand.rounded} ${brand.fonts.body} ${brand.colors.textLight}`}
                  >
                    {item.content}
                  </Accordion.Content>
                </div>
              </Accordion.Item>
            </div>
          );
        })}
      </Accordion.Root>
    </div>
  );
};

// Primitive Legend Component
const PrimitiveLegend = () => {
  interface PrimitiveInfo {
    name: string;
    icon: React.ElementType;
    color: string;
    description: string;
  }

  const primitives: PrimitiveInfo[] = [
    {
      name: "Root",
      icon: Container,
      color: "text-purple-600 border-purple-400",
      description: "Container & state manager",
    },
    {
      name: "Item",
      icon: Box,
      color: "text-blue-600 border-blue-400",
      description: "Individual collapsible section",
    },
    {
      name: "Header",
      icon: Layers,
      color: "text-green-600 border-green-400",
      description: "Accessibility wrapper",
    },
    {
      name: "Trigger",
      icon: MousePointer,
      color: "text-orange-600 border-orange-400",
      description: "Interactive button",
    },
    {
      name: "Content",
      icon: FileCode,
      color: "text-red-600 border-red-400",
      description: "Collapsible content area",
    },
  ];

  return (
    <div className="bg-white p-6 rounded-lg shadow-sm">
      <h3 className="text-lg font-bold mb-4 flex items-center gap-2">
        <Code2 className="w-5 h-5" />
        Primitive Visual Guide
      </h3>
      <div className="grid grid-cols-2 md:grid-cols-5 gap-4">
        {primitives.map(
          ({ name, icon: Icon, color, description }: PrimitiveInfo) => (
            <div key={name} className="text-center">
              <div
                className={`inline-flex items-center gap-1 px-3 py-1.5 text-sm font-mono ${color} bg-white rounded-full shadow-sm border mb-2`}
              >
                <Icon className="w-4 h-4" />
                <span>{name}</span>
              </div>
              <p className="text-xs text-gray-600">{description}</p>
            </div>
          ),
        )}
      </div>
      <div className="mt-4 pt-4 border-t">
        <p className="text-sm text-gray-600">
          <strong>Dashed borders</strong> show the boundaries of each primitive
          component. Each color represents a different level in the component
          hierarchy.
        </p>
      </div>
    </div>
  );
};

// Sample content
const accordionItems = [
  {
    title: "Getting Started",
    content:
      "Welcome to our platform! This section covers everything you need to know to begin your journey with us. From initial setup to advanced features, we've got you covered.",
  },
  {
    title: "Advanced Features",
    content:
      "Unlock the full potential of our platform with these powerful features. Learn about customization options, integrations, and professional workflows.",
  },
  {
    title: "Support & Resources",
    content:
      "Need help? Find comprehensive documentation, video tutorials, and direct support channels. Our team is here to ensure your success.",
  },
];

export default function BrandAccordionShowcase() {
  const [showPrimitives, setShowPrimitives] = React.useState(false);

  return (
    <div className="min-h-screen bg-gray-50">
      <div className="bg-white border-b sticky top-0 z-30 shadow-sm">
        <div className="max-w-7xl mx-auto px-8 py-4 flex items-center justify-between">
          <h1 className="text-2xl font-bold text-gray-900">
            Brand Identity × Accordion Showcase
          </h1>
          <button
            onClick={() => setShowPrimitives(!showPrimitives)}
            className={`px-4 py-2 rounded-lg font-medium transition-all flex items-center gap-2 ${
              showPrimitives
                ? "bg-purple-600 text-white"
                : "bg-gray-200 text-gray-700 hover:bg-gray-300"
            }`}
          >
            <Code2 className="w-4 h-4" />
            {showPrimitives ? "Hide" : "Show"} Primitive Outlines
          </button>
        </div>
      </div>

      <div className="p-8">
        <div className="max-w-7xl mx-auto">
          {/* Primitive Legend */}
          {showPrimitives && (
            <div className="mb-8">
              <PrimitiveLegend />
            </div>
          )}

          {/* Primitive Anatomy Section */}
          {/* <div className="mb-12">
            <PrimitiveAnatomy />
          </div> */}

          {/* Unstyled Primitives Section */}
          <div className="mb-12 p-8 bg-gray-100 rounded-xl">
            <h2 className="text-2xl font-bold mb-2 text-gray-900">
              Unstyled Primitives
            </h2>
            <p className="text-gray-600 mb-8">
              Raw Accordion primitives without any styling
            </p>

            <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
              <div>
                <h3 className="text-sm font-semibold text-gray-700 mb-3">
                  Variant 1: Multi-Select
                </h3>
                <UnstyledAccordionVariant1
                  items={accordionItems}
                  showPrimitives={showPrimitives}
                />
              </div>

              <div>
                <h3 className="text-sm font-semibold text-gray-700 mb-3">
                  Variant 2: Single-Select
                </h3>
                <UnstyledAccordionVariant2
                  items={accordionItems}
                  showPrimitives={showPrimitives}
                />
              </div>

              <div>
                <h3 className="text-sm font-semibold text-gray-700 mb-3">
                  Variant 3: Multi-Select with Icons
                </h3>
                <UnstyledAccordionVariant3
                  items={accordionItems}
                  showPrimitives={showPrimitives}
                />
              </div>
            </div>

            {/* <div className="mt-6 p-4 bg-white rounded-lg">
              <h4 className="font-semibold text-sm mb-2">
                What you're seeing:
              </h4>
              <ul className="text-sm text-gray-600 space-y-1">
                <li>• No CSS classes or Tailwind utilities applied</li>
                <li>
                  • Browser default styles only (button appearance, focus rings,
                  etc.)
                </li>
                <li>
                  • Radix UI's built-in accessibility features (ARIA attributes,
                  keyboard navigation)
                </li>
                <li>
                  • Minimal inline styles used only for primitive outline
                  visualization when enabled
                </li>
                <li>
                  • The{" "}
                  <code className="px-1 py-0.5 bg-gray-100 rounded text-xs">
                    Accordion.Trigger
                  </code>{" "}
                  renders as an unstyled button element
                </li>
                <li>
                  • The{" "}
                  <code className="px-1 py-0.5 bg-gray-100 rounded text-xs">
                    Accordion.Content
                  </code>{" "}
                  handles open/close animations automatically
                </li>
              </ul>
            </div> */}
          </div>

          <h2 className="text-2xl font-bold mb-2 text-gray-900">
            Styled Brand Variations
          </h2>
          <p className="text-gray-600 mb-8">
            Same primitives enhanced with brand-specific styling, animations,
            and custom icons
          </p>

          <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
            {Object.entries(brands).map(([brandKey, brand]) => (
              <div key={brandKey} className="space-y-8">
                <div className="text-center">
                  <h2
                    className={`text-2xl mb-2 ${brand.fonts.heading} ${brand.colors.text}`}
                  >
                    Brand colors
                  </h2>
                  <div className="flex justify-center gap-2 mb-4">
                    <div
                      className={`w-8 h-8 ${brand.colors.primary} ${brand.rounded}`}
                    ></div>
                    <div
                      className={`w-8 h-8 ${brand.colors.secondary} ${brand.rounded}`}
                    ></div>
                    <div
                      className={`w-8 h-8 ${brand.colors.accent} ${brand.rounded}`}
                    ></div>
                  </div>
                </div>

                <div className="space-y-8">
                  <div>
                    <h3 className="text-sm font-semibold text-gray-500 mb-3">
                      Variant 1:{" "}
                      {brandKey === "modern"
                        ? "Chevron"
                        : brandKey === "elegant"
                          ? "Sparkle"
                          : "Smile"}{" "}
                      Multi-Select
                    </h3>
                    <AccordionVariant1
                      brand={brand}
                      brandKey={brandKey}
                      items={accordionItems}
                      showPrimitives={showPrimitives}
                    />
                  </div>

                  <div>
                    <h3 className="text-sm font-semibold text-gray-500 mb-3">
                      Variant 2:{" "}
                      {brandKey === "modern"
                        ? "Code/Terminal"
                        : brandKey === "elegant"
                          ? "Diamond"
                          : "Play/Pause"}{" "}
                      Single-Select
                    </h3>
                    <AccordionVariant2
                      brand={brand}
                      brandKey={brandKey}
                      items={accordionItems}
                      showPrimitives={showPrimitives}
                    />
                  </div>

                  <div>
                    <h3 className="text-sm font-semibold text-gray-500 mb-3">
                      Variant 3:{" "}
                      {brandKey === "modern"
                        ? "Tech Icons"
                        : brandKey === "elegant"
                          ? "Luxury Icons"
                          : "Creative Icons"}{" "}
                      with Color Change
                    </h3>
                    <AccordionVariant3
                      brand={brand}
                      brandKey={brandKey}
                      items={accordionItems}
                      showPrimitives={showPrimitives}
                    />
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
}
