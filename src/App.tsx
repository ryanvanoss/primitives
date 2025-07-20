import * as Accordion from "@radix-ui/react-accordion";
import {
  ArrowRight,
  Box,
  Circle,
  CircleDot,
  Code2,
  Container,
  Diamond,
  FileCode,
  Layers,
  Minus,
  MousePointer,
  Plus,
  Square,
  SquareCheck,
  Triangle,
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
const PrimitiveLabel = ({
  name,
  icon: Icon,
  color,
  position = "top-left",
}: {
  name: string;
  icon: React.ComponentType<{ className?: string }>;
  color: string;
  position?: string;
}) => {
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

// Accordion Variants with Primitive Outlines
const AccordionVariant1 = ({
  brand,
  items,
  showPrimitives,
}: {
  brand: any;
  items: any[];
  showPrimitives: boolean;
}) => {
  const [openItems, setOpenItems] = React.useState<string[]>([]);

  return (
    <div
      className={`relative ${
        showPrimitives
          ? "p-4 border-2 border-dashed border-purple-400 rounded-xl"
          : ""
      }`}
    >
      {showPrimitives && (
        <PrimitiveLabel
          name="Accordion.Root"
          icon={Container}
          color="text-purple-600"
        />
      )}
      <Accordion.Root
        type="multiple"
        value={openItems}
        onValueChange={setOpenItems}
        className="w-full space-y-2"
      >
        {items.map((item: any, index: number) => (
          <div
            key={index}
            className={`relative ${
              showPrimitives
                ? "p-2 border-2 border-dashed border-blue-400 rounded-lg"
                : ""
            }`}
          >
            {showPrimitives && (
              <PrimitiveLabel
                name="Accordion.Item"
                icon={Box}
                color="text-blue-600"
              />
            )}
            <Accordion.Item
              value={`item-${index}`}
              className={`border ${brand.colors.border} ${brand.rounded} overflow-hidden ${brand.shadow}`}
            >
              <div
                className={`relative ${
                  showPrimitives
                    ? "border-2 border-dashed border-green-400"
                    : ""
                }`}
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
                    className={`relative ${
                      showPrimitives
                        ? "border-2 border-dashed border-orange-400"
                        : ""
                    }`}
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
                          <Minus className="w-5 h-5" />
                        ) : (
                          <Plus className="w-5 h-5" />
                        )}
                      </span>
                    </Accordion.Trigger>
                  </div>
                </Accordion.Header>
              </div>
              <div
                className={`relative ${
                  showPrimitives && openItems.includes(`item-${index}`)
                    ? "border-2 border-t-0 border-dashed border-red-400"
                    : ""
                }`}
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
  items,
  showPrimitives,
}: {
  brand: any;
  items: any[];
  showPrimitives: boolean;
}) => {
  const [openItems, setOpenItems] = React.useState<string[]>(["item-0"]);

  return (
    <div
      className={`relative ${
        showPrimitives
          ? "p-4 border-2 border-dashed border-purple-400 rounded-xl"
          : ""
      }`}
    >
      {showPrimitives && (
        <PrimitiveLabel
          name="Accordion.Root"
          icon={Container}
          color="text-purple-600"
        />
      )}
      <Accordion.Root
        type="single"
        value={openItems[0]}
        onValueChange={(value) => setOpenItems(value ? [value] : [])}
        className={`w-full border ${brand.colors.border} ${brand.rounded} ${brand.shadow} overflow-hidden`}
      >
        {items.map((item: any, index: number) => (
          <div
            key={index}
            className={`relative ${
              showPrimitives ? "border-2 border-dashed border-blue-400 m-2" : ""
            }`}
          >
            {showPrimitives && (
              <PrimitiveLabel name="Item" icon={Box} color="text-blue-600" />
            )}
            <Accordion.Item
              value={`item-${index}`}
              className={index > 0 ? `border-t ${brand.colors.border}` : ""}
            >
              <div
                className={`relative ${
                  showPrimitives
                    ? "border-2 border-dashed border-green-400"
                    : ""
                }`}
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
                    className={`relative ${
                      showPrimitives
                        ? "border-2 border-dashed border-orange-400"
                        : ""
                    }`}
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
                          openItems.includes(`item-${index}`) ? "rotate-90" : ""
                        }`}
                      >
                        <ArrowRight className="w-4 h-4" />
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
                className={`relative ${
                  showPrimitives && openItems.includes(`item-${index}`)
                    ? "border-2 border-t-0 border-dashed border-red-400"
                    : ""
                }`}
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
  items,
  showPrimitives,
}: {
  brand: any;
  items: any[];
  showPrimitives: boolean;
}) => {
  const [openItems, setOpenItems] = React.useState<string[]>([]);

  const getIcon = (isOpen: boolean, index: number) => {
    const icons = [
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
      className={`relative ${
        showPrimitives
          ? "p-4 border-2 border-dashed border-purple-400 rounded-xl"
          : ""
      }`}
    >
      {showPrimitives && (
        <PrimitiveLabel
          name="Accordion.Root"
          icon={Container}
          color="text-purple-600"
        />
      )}
      <Accordion.Root
        type="multiple"
        value={openItems}
        onValueChange={setOpenItems}
        className="w-full space-y-3"
      >
        {items.map((item: any, index: number) => {
          const isOpen = openItems.includes(`item-${index}`);
          return (
            <div
              key={index}
              className={`relative ${
                showPrimitives
                  ? "p-2 border-2 border-dashed border-blue-400 rounded-lg"
                  : ""
              }`}
            >
              {showPrimitives && (
                <PrimitiveLabel
                  name="Accordion.Item"
                  icon={Box}
                  color="text-blue-600"
                />
              )}
              <Accordion.Item value={`item-${index}`} className="w-full">
                <div
                  className={`relative ${
                    showPrimitives
                      ? "border-2 border-dashed border-green-400 rounded-lg"
                      : ""
                  }`}
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
                      className={`relative ${
                        showPrimitives
                          ? "border-2 border-dashed border-orange-400 rounded-lg"
                          : ""
                      }`}
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
                        className={`w-full p-4 ${brand.rounded} ${
                          brand.shadow
                        } ${
                          isOpen ? brand.colors.primary : brand.colors.secondary
                        } transition-all duration-300 ${brand.fonts.heading} ${
                          isOpen ? "text-white" : brand.colors.text
                        }`}
                      >
                        <div className="flex items-center justify-between">
                          <span>{item.title}</span>
                          <span
                            className={`transition-all duration-300 ${
                              isOpen ? "rotate-180" : ""
                            }`}
                          >
                            {getIcon(isOpen, index)}
                          </span>
                        </div>
                      </Accordion.Trigger>
                    </div>
                  </Accordion.Header>
                </div>
                <div
                  className={`relative ${
                    showPrimitives && isOpen
                      ? "border-2 border-dashed border-red-400 rounded-lg mt-1"
                      : ""
                  }`}
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
  const primitives = [
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
        {primitives.map(({ name, icon: Icon, color, description }) => (
          <div key={name} className="text-center">
            <div
              className={`inline-flex items-center gap-1 px-3 py-1.5 text-sm font-mono ${color} bg-white rounded-full shadow-sm border mb-2`}
            >
              <Icon className="w-4 h-4" />
              <span>{name}</span>
            </div>
            <p className="text-xs text-gray-600">{description}</p>
          </div>
        ))}
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
          <p className="text-center text-gray-600 mb-8">
            3 Unique Brands × 3 Accordion Variants = 9 Distinct Experiences
          </p>

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

          <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
            {Object.entries(brands).map(([brandKey, brand]) => (
              <div key={brandKey} className="space-y-8">
                <div className="text-center">
                  <h2
                    className={`text-2xl mb-2 ${brand.fonts.heading} ${brand.colors.text}`}
                  >
                    {brand.name}
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
                      Variant 1: Plus/Minus Multi-Select
                    </h3>
                    <AccordionVariant1
                      brand={brand}
                      items={accordionItems}
                      showPrimitives={showPrimitives}
                    />
                  </div>

                  <div>
                    <h3 className="text-sm font-semibold text-gray-500 mb-3">
                      Variant 2: Arrow Single-Select with Status
                    </h3>
                    <AccordionVariant2
                      brand={brand}
                      items={accordionItems}
                      showPrimitives={showPrimitives}
                    />
                  </div>

                  <div>
                    <h3 className="text-sm font-semibold text-gray-500 mb-3">
                      Variant 3: Dynamic Icons with Color Change
                    </h3>
                    <AccordionVariant3
                      brand={brand}
                      items={accordionItems}
                      showPrimitives={showPrimitives}
                    />
                  </div>
                </div>
              </div>
            ))}
          </div>

          {/* <div className="mt-16 grid grid-cols-1 md:grid-cols-2 gap-6"> */}
          <div className="mt-16">
            <div className="p-6 bg-white rounded-lg shadow-sm">
              <h2 className="text-xl font-bold mb-4">Design System Overview</h2>
              <div className="grid grid-cols-1 gap-6 text-sm">
                <div>
                  <h3 className="font-semibold mb-2">Modern Tech</h3>
                  <ul className="space-y-1 text-gray-600">
                    <li>• Clean, minimal aesthetic</li>
                    <li>• Blue/Cyan color palette</li>
                    <li>• Sans-serif typography</li>
                    <li>• Soft rounded corners</li>
                  </ul>
                </div>
                <div>
                  <h3 className="font-semibold mb-2">Elegant Luxe</h3>
                  <ul className="space-y-1 text-gray-600">
                    <li>• Sophisticated, premium feel</li>
                    <li>• Purple/Gold accents</li>
                    <li>• Serif typography</li>
                    <li>• Sharp corners</li>
                  </ul>
                </div>
                <div>
                  <h3 className="font-semibold mb-2">Playful Pop</h3>
                  <ul className="space-y-1 text-gray-600">
                    <li>• Fun, energetic vibe</li>
                    <li>• Pink/Yellow/Green palette</li>
                    <li>• Mixed typography</li>
                    <li>• Extra rounded corners</li>
                  </ul>
                </div>
              </div>
            </div>
          </div>

          {/* <div className="p-6 bg-white rounded-lg shadow-sm">
              <h2 className="text-xl font-bold mb-4">Implementation Notes</h2>
              <div className="space-y-3 text-sm text-gray-600">
                <div>
                  <h4 className="font-semibold text-gray-800">
                    Accessibility Features:
                  </h4>
                  <p>
                    All accordions are fully keyboard navigable with proper ARIA
                    attributes handled by Primitive components.
                  </p>
                </div>
                <div>
                  <h4 className="font-semibold text-gray-800">
                    State Management:
                  </h4>
                  <p>
                    Single vs Multiple selection modes controlled via the type
                    prop on Accordion.Root.
                  </p>
                </div>
                <div>
                  <h4 className="font-semibold text-gray-800">Animation:</h4>
                  <p>
                    Smooth transitions using Tailwind's transition utilities and
                    transform properties.
                  </p>
                </div>
                <div>
                  <h4 className="font-semibold text-gray-800">
                    Customization:
                  </h4>
                  <p>
                    Each primitive accepts the asChild prop for complete control
                    over rendering.
                  </p>
                </div>
              </div>
            </div> */}
          {/* </div> */}
        </div>
      </div>
    </div>
  );
}
