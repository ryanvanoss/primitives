import * as Accordion from "@radix-ui/react-accordion";
import {
  ArrowDown,
  ArrowRight,
  ChevronDown,
  ChevronUp,
  Minus,
  Plus,
} from "lucide-react";
import { useState } from "react";

export default function AccordionVariations() {
  const [controlledValue, setControlledValue] = useState("");
  const [singleValue, setSingleValue] = useState("");
  const [multipleValues, setMultipleValues] = useState<string[]>([]);

  return (
    <div style={{ padding: "20px", fontFamily: "system-ui" }}>
      <h1>Three Accordion Versions - Same Primitives, Different Behaviors</h1>

      <div
        style={{
          background: "#f0f9ff",
          border: "2px solid #0ea5e9",
          borderRadius: "8px",
          padding: "16px",
          marginBottom: "24px",
        }}
      >
        <h3>Accordion Primitives Used:</h3>
        <ul style={{ margin: 0 }}>
          <li>
            <strong>Accordion.Root</strong> - Container that manages accordion
            state
          </li>
          <li>
            <strong>Accordion.Item</strong> - Individual accordion section
          </li>
          <li>
            <strong>Accordion.Header</strong> - Wrapper for the trigger button
          </li>
          <li>
            <strong>Accordion.Trigger</strong> - Clickable element to toggle
            content
          </li>
          <li>
            <strong>Accordion.Content</strong> - Collapsible content area
          </li>
        </ul>
      </div>

      {/* Version 1: Single Item Accordion */}
      <section style={{ marginBottom: "40px" }}>
        <h2>Version 1: Single Item Accordion</h2>
        <p>Only one item can be open at a time</p>

        {/* Accordion.Root highlighted */}
        <div
          style={{
            border: "3px solid #dc2626",
            borderRadius: "8px",
            padding: "4px",
            position: "relative",
          }}
        >
          <div
            style={{
              position: "absolute",
              top: "-12px",
              left: "8px",
              background: "#dc2626",
              color: "white",
              padding: "2px 8px",
              borderRadius: "4px",
              fontSize: "12px",
              fontWeight: "bold",
            }}
          >
            Accordion.Root
          </div>

          <Accordion.Root
            type="single"
            collapsible
            value={singleValue}
            onValueChange={setSingleValue}
          >
            {/* Accordion.Item highlighted */}
            <div
              style={{
                border: "2px solid #ea580c",
                borderRadius: "6px",
                margin: "8px 4px",
                position: "relative",
              }}
            >
              <div
                style={{
                  position: "absolute",
                  top: "-10px",
                  left: "8px",
                  background: "#ea580c",
                  color: "white",
                  padding: "1px 6px",
                  borderRadius: "3px",
                  fontSize: "11px",
                  fontWeight: "bold",
                }}
              >
                Accordion.Item
              </div>

              <Accordion.Item value="item-1">
                {/* Accordion.Header highlighted */}
                <div
                  style={{
                    border: "2px solid #ca8a04",
                    borderRadius: "4px",
                    margin: "4px 2px",
                    position: "relative",
                  }}
                >
                  <div
                    style={{
                      position: "absolute",
                      top: "-8px",
                      left: "8px",
                      background: "#ca8a04",
                      color: "white",
                      padding: "1px 4px",
                      borderRadius: "2px",
                      fontSize: "10px",
                      fontWeight: "bold",
                    }}
                  >
                    Accordion.Header
                  </div>

                  <Accordion.Header>
                    {/* Accordion.Trigger highlighted */}
                    <div
                      style={{
                        border: "2px solid #16a34a",
                        borderRadius: "4px",
                        margin: "2px 1px",
                        position: "relative",
                      }}
                    >
                      <div
                        style={{
                          position: "absolute",
                          top: "-8px",
                          left: "8px",
                          background: "#16a34a",
                          color: "white",
                          padding: "1px 4px",
                          borderRadius: "2px",
                          fontSize: "10px",
                          fontWeight: "bold",
                        }}
                      >
                        Accordion.Trigger
                      </div>

                      <Accordion.Trigger
                        style={{
                          width: "100%",
                          padding: "12px",
                          display: "flex",
                          alignItems: "center",
                          gap: "8px",
                          background: "none",
                          border: "none",
                          cursor: "pointer",
                        }}
                      >
                        {singleValue === "item-1" ? (
                          <ChevronUp />
                        ) : (
                          <ChevronDown />
                        )}
                        What is a Design System?
                      </Accordion.Trigger>
                    </div>
                  </Accordion.Header>
                </div>

                {/* Accordion.Content highlighted */}
                <div
                  style={{
                    border: "2px solid #7c3aed",
                    borderRadius: "4px",
                    margin: "4px 2px",
                    position: "relative",
                  }}
                >
                  <div
                    style={{
                      position: "absolute",
                      top: "-8px",
                      left: "8px",
                      background: "#7c3aed",
                      color: "white",
                      padding: "1px 4px",
                      borderRadius: "2px",
                      fontSize: "10px",
                      fontWeight: "bold",
                    }}
                  >
                    Accordion.Content
                  </div>

                  <Accordion.Content style={{ padding: "12px" }}>
                    A design system is a comprehensive collection of reusable
                    components, guided by clear standards, that can be assembled
                    together to build digital products. It includes design
                    tokens, components, patterns, guidelines, and documentation
                    that ensure consistency across all touchpoints of a brand or
                    product.
                  </Accordion.Content>
                </div>
              </Accordion.Item>
            </div>
            <div
              style={{
                border: "2px solid #ea580c",
                borderRadius: "6px",
                margin: "8px 4px",
                position: "relative",
              }}
            >
              <div
                style={{
                  position: "absolute",
                  top: "-10px",
                  left: "8px",
                  background: "#ea580c",
                  color: "white",
                  padding: "1px 6px",
                  borderRadius: "3px",
                  fontSize: "11px",
                  fontWeight: "bold",
                }}
              >
                Accordion.Item
              </div>

              <Accordion.Item value="item-2">
                <div
                  style={{
                    border: "2px solid #ca8a04",
                    borderRadius: "4px",
                    margin: "4px 2px",
                    position: "relative",
                  }}
                >
                  <div
                    style={{
                      position: "absolute",
                      top: "-8px",
                      left: "8px",
                      background: "#ca8a04",
                      color: "white",
                      padding: "1px 4px",
                      borderRadius: "2px",
                      fontSize: "10px",
                      fontWeight: "bold",
                    }}
                  >
                    Accordion.Header
                  </div>

                  <Accordion.Header>
                    <div
                      style={{
                        border: "2px solid #16a34a",
                        borderRadius: "4px",
                        margin: "2px 1px",
                        position: "relative",
                      }}
                    >
                      <div
                        style={{
                          position: "absolute",
                          top: "-8px",
                          left: "8px",
                          background: "#16a34a",
                          color: "white",
                          padding: "1px 4px",
                          borderRadius: "2px",
                          fontSize: "10px",
                          fontWeight: "bold",
                        }}
                      >
                        Accordion.Trigger
                      </div>

                      <Accordion.Trigger
                        style={{
                          width: "100%",
                          padding: "12px",
                          display: "flex",
                          alignItems: "center",
                          gap: "8px",
                          background: "none",
                          border: "none",
                          cursor: "pointer",
                        }}
                      >
                        {singleValue === "item-2" ? (
                          <ChevronUp />
                        ) : (
                          <ChevronDown />
                        )}
                        Design Tokens and Foundations
                      </Accordion.Trigger>
                    </div>
                  </Accordion.Header>
                </div>

                <div
                  style={{
                    border: "2px solid #7c3aed",
                    borderRadius: "4px",
                    margin: "4px 2px",
                    position: "relative",
                  }}
                >
                  <div
                    style={{
                      position: "absolute",
                      top: "-8px",
                      left: "8px",
                      background: "#7c3aed",
                      color: "white",
                      padding: "1px 4px",
                      borderRadius: "2px",
                      fontSize: "10px",
                      fontWeight: "bold",
                    }}
                  >
                    Accordion.Content
                  </div>

                  <Accordion.Content style={{ padding: "12px" }}>
                    Design tokens are the visual design atoms of a design system
                    - specifically, they are named entities that store visual
                    design attributes such as colors, typography scales, spacing
                    values, shadows, and border radius. These tokens create a
                    single source of truth for design decisions and enable
                    consistent theming across platforms.
                  </Accordion.Content>
                </div>
              </Accordion.Item>
            </div>
            <div
              style={{
                border: "2px solid #ea580c",
                borderRadius: "6px",
                margin: "8px 4px",
                position: "relative",
              }}
            >
              <div
                style={{
                  position: "absolute",
                  top: "-10px",
                  left: "8px",
                  background: "#ea580c",
                  color: "white",
                  padding: "1px 6px",
                  borderRadius: "3px",
                  fontSize: "11px",
                  fontWeight: "bold",
                }}
              >
                Accordion.Item
              </div>

              <Accordion.Item value="item-3">
                <div
                  style={{
                    border: "2px solid #ca8a04",
                    borderRadius: "4px",
                    margin: "4px 2px",
                    position: "relative",
                  }}
                >
                  <div
                    style={{
                      position: "absolute",
                      top: "-8px",
                      left: "8px",
                      background: "#ca8a04",
                      color: "white",
                      padding: "1px 4px",
                      borderRadius: "2px",
                      fontSize: "10px",
                      fontWeight: "bold",
                    }}
                  >
                    Accordion.Header
                  </div>

                  <Accordion.Header>
                    <div
                      style={{
                        border: "2px solid #16a34a",
                        borderRadius: "4px",
                        margin: "2px 1px",
                        position: "relative",
                      }}
                    >
                      <div
                        style={{
                          position: "absolute",
                          top: "-8px",
                          left: "8px",
                          background: "#16a34a",
                          color: "white",
                          padding: "1px 4px",
                          borderRadius: "2px",
                          fontSize: "10px",
                          fontWeight: "bold",
                        }}
                      >
                        Accordion.Trigger
                      </div>

                      <Accordion.Trigger
                        style={{
                          width: "100%",
                          padding: "12px",
                          display: "flex",
                          alignItems: "center",
                          gap: "8px",
                          background: "none",
                          border: "none",
                          cursor: "pointer",
                        }}
                      >
                        {singleValue === "item-3" ? (
                          <ChevronUp />
                        ) : (
                          <ChevronDown />
                        )}
                        Component Documentation
                      </Accordion.Trigger>
                    </div>
                  </Accordion.Header>
                </div>

                <div
                  style={{
                    border: "2px solid #7c3aed",
                    borderRadius: "4px",
                    margin: "4px 2px",
                    position: "relative",
                  }}
                >
                  <div
                    style={{
                      position: "absolute",
                      top: "-8px",
                      left: "8px",
                      background: "#7c3aed",
                      color: "white",
                      padding: "1px 4px",
                      borderRadius: "2px",
                      fontSize: "10px",
                      fontWeight: "bold",
                    }}
                  >
                    Accordion.Content
                  </div>

                  <Accordion.Content style={{ padding: "12px" }}>
                    Effective design system documentation includes usage
                    guidelines, accessibility requirements, code examples,
                    visual specifications, and interaction patterns. Tools like
                    Storybook, Figma, and dedicated documentation sites help
                    teams understand when and how to use each component
                    correctly.
                  </Accordion.Content>
                </div>
              </Accordion.Item>
            </div>
          </Accordion.Root>
        </div>
      </section>

      {/* Version 2: Multiple Items Accordion */}
      <section style={{ marginBottom: "40px" }}>
        <h2>Version 2: Multiple Items Accordion</h2>
        <p>
          Multiple items can be open simultaneously -{" "}
          <em>Same primitives, different Root configuration</em>
        </p>
        <div
          style={{
            border: "3px solid #dc2626",
            borderRadius: "8px",
            padding: "4px",
            position: "relative",
          }}
        >
          <div
            style={{
              position: "absolute",
              top: "-12px",
              left: "8px",
              background: "#dc2626",
              color: "white",
              padding: "2px 8px",
              borderRadius: "4px",
              fontSize: "12px",
              fontWeight: "bold",
            }}
          >
            Accordion.Root
          </div>

          <Accordion.Root
            type="multiple"
            value={multipleValues}
            onValueChange={setMultipleValues}
          >
            <div
              style={{
                border: "2px solid #ea580c",
                borderRadius: "6px",
                margin: "8px 4px",
                position: "relative",
              }}
            >
              <div
                style={{
                  position: "absolute",
                  top: "-10px",
                  left: "8px",
                  background: "#ea580c",
                  color: "white",
                  padding: "1px 6px",
                  borderRadius: "3px",
                  fontSize: "11px",
                  fontWeight: "bold",
                }}
              >
                Accordion.Item
              </div>

              <Accordion.Item value="multiple-1">
                <div
                  style={{
                    border: "2px solid #ca8a04",
                    borderRadius: "4px",
                    margin: "4px 2px",
                    position: "relative",
                  }}
                >
                  <div
                    style={{
                      position: "absolute",
                      top: "-8px",
                      left: "8px",
                      background: "#ca8a04",
                      color: "white",
                      padding: "1px 4px",
                      borderRadius: "2px",
                      fontSize: "10px",
                      fontWeight: "bold",
                    }}
                  >
                    Accordion.Header
                  </div>

                  <Accordion.Header>
                    <div
                      style={{
                        border: "2px solid #16a34a",
                        borderRadius: "4px",
                        margin: "2px 1px",
                        position: "relative",
                      }}
                    >
                      <div
                        style={{
                          position: "absolute",
                          top: "-8px",
                          left: "8px",
                          background: "#16a34a",
                          color: "white",
                          padding: "1px 4px",
                          borderRadius: "2px",
                          fontSize: "10px",
                          fontWeight: "bold",
                        }}
                      >
                        Accordion.Trigger
                      </div>

                      <Accordion.Trigger
                        style={{
                          width: "100%",
                          padding: "12px",
                          display: "flex",
                          alignItems: "center",
                          gap: "8px",
                          background: "none",
                          border: "none",
                          cursor: "pointer",
                        }}
                      >
                        {multipleValues.includes("multiple-1") ? (
                          <Minus />
                        ) : (
                          <Plus />
                        )}
                        Component Architecture
                      </Accordion.Trigger>
                    </div>
                  </Accordion.Header>
                </div>

                <div
                  style={{
                    border: "2px solid #7c3aed",
                    borderRadius: "4px",
                    margin: "4px 2px",
                    position: "relative",
                  }}
                >
                  <div
                    style={{
                      position: "absolute",
                      top: "-8px",
                      left: "8px",
                      background: "#7c3aed",
                      color: "white",
                      padding: "1px 4px",
                      borderRadius: "2px",
                      fontSize: "10px",
                      fontWeight: "bold",
                    }}
                  >
                    Accordion.Content
                  </div>

                  <Accordion.Content style={{ padding: "12px" }}>
                    Web component libraries provide encapsulated, reusable UI
                    elements with their own styling and behavior. They promote
                    modularity, maintainability, and consistency across
                    applications while reducing development time through
                    standardized interfaces.
                  </Accordion.Content>
                </div>
              </Accordion.Item>
            </div>

            {/* Additional items with same primitive structure... */}
            <div
              style={{
                border: "2px solid #ea580c",
                borderRadius: "6px",
                margin: "8px 4px",
                position: "relative",
              }}
            >
              <Accordion.Item value="multiple-2">
                <Accordion.Header>
                  <Accordion.Trigger
                    style={{
                      width: "100%",
                      padding: "12px",
                      display: "flex",
                      alignItems: "center",
                      gap: "8px",
                      background: "none",
                      border: "none",
                      cursor: "pointer",
                    }}
                  >
                    {multipleValues.includes("multiple-2") ? (
                      <Minus />
                    ) : (
                      <Plus />
                    )}
                    Framework Agnostic Benefits
                  </Accordion.Trigger>
                </Accordion.Header>
                <Accordion.Content style={{ padding: "12px" }}>
                  Modern component libraries can work across different
                  frameworks like React, Vue, Angular, and vanilla JavaScript.
                  This framework independence allows teams to maintain
                  consistency even when using different technologies across
                  projects or during migrations.
                </Accordion.Content>
              </Accordion.Item>
            </div>
          </Accordion.Root>
        </div>
      </section>

      {/* Version 3: Controlled Accordion */}
      <section style={{ marginBottom: "40px" }}>
        <h2>Version 3: Controlled Accordion</h2>
        <p>
          Externally controlled with custom state management -{" "}
          <em>Same primitives, controlled state</em>
        </p>

        <div style={{ marginBottom: "16px" }}>
          <button
            onClick={() => setControlledValue("")}
            style={{ marginRight: "8px", padding: "8px 12px" }}
          >
            Close All
          </button>
          <button
            onClick={() => setControlledValue("controlled-2")}
            style={{ marginRight: "8px", padding: "8px 12px" }}
          >
            Open Item 2
          </button>
          <button
            onClick={() => setControlledValue("controlled-3")}
            style={{ padding: "8px 12px" }}
          >
            Open Item 3
          </button>
          <p>Current open item: {controlledValue || "none"}</p>
        </div>

        {/* Same Accordion.Root primitive, with controlled props */}
        <div
          style={{
            border: "3px solid #dc2626",
            borderRadius: "8px",
            padding: "4px",
            position: "relative",
          }}
        >
          <div
            style={{
              position: "absolute",
              top: "-12px",
              left: "8px",
              background: "#dc2626",
              color: "white",
              padding: "2px 8px",
              borderRadius: "4px",
              fontSize: "12px",
              fontWeight: "bold",
            }}
          >
            Accordion.Root
          </div>

          <Accordion.Root
            type="single"
            value={controlledValue}
            onValueChange={setControlledValue}
          >
            {/* Using exact same Item primitive structure as Versions 1 & 2 */}
            <div
              style={{
                border: "2px solid #ea580c",
                borderRadius: "6px",
                margin: "8px 4px",
                position: "relative",
              }}
            >
              <div
                style={{
                  position: "absolute",
                  top: "-10px",
                  left: "8px",
                  background: "#ea580c",
                  color: "white",
                  padding: "1px 6px",
                  borderRadius: "3px",
                  fontSize: "11px",
                  fontWeight: "bold",
                }}
              >
                Accordion.Item
              </div>

              <Accordion.Item value="controlled-1">
                <div
                  style={{
                    border: "2px solid #ca8a04",
                    borderRadius: "4px",
                    margin: "4px 2px",
                    position: "relative",
                  }}
                >
                  <div
                    style={{
                      position: "absolute",
                      top: "-8px",
                      left: "8px",
                      background: "#ca8a04",
                      color: "white",
                      padding: "1px 4px",
                      borderRadius: "2px",
                      fontSize: "10px",
                      fontWeight: "bold",
                    }}
                  >
                    Accordion.Header
                  </div>

                  <Accordion.Header>
                    <div
                      style={{
                        border: "2px solid #16a34a",
                        borderRadius: "4px",
                        margin: "2px 1px",
                        position: "relative",
                      }}
                    >
                      <div
                        style={{
                          position: "absolute",
                          top: "-8px",
                          left: "8px",
                          background: "#16a34a",
                          color: "white",
                          padding: "1px 4px",
                          borderRadius: "2px",
                          fontSize: "10px",
                          fontWeight: "bold",
                        }}
                      >
                        Accordion.Trigger
                      </div>

                      <Accordion.Trigger
                        style={{
                          width: "100%",
                          padding: "12px",
                          display: "flex",
                          alignItems: "center",
                          gap: "8px",
                          background: "none",
                          border: "none",
                          cursor: "pointer",
                        }}
                      >
                        {controlledValue === "controlled-1" ? (
                          <ArrowDown />
                        ) : (
                          <ArrowRight />
                        )}
                        Scalability and Growth
                      </Accordion.Trigger>
                    </div>
                  </Accordion.Header>
                </div>

                <div
                  style={{
                    border: "2px solid #7c3aed",
                    borderRadius: "4px",
                    margin: "4px 2px",
                    position: "relative",
                  }}
                >
                  <div
                    style={{
                      position: "absolute",
                      top: "-8px",
                      left: "8px",
                      background: "#7c3aed",
                      color: "white",
                      padding: "1px 4px",
                      borderRadius: "2px",
                      fontSize: "10px",
                      fontWeight: "bold",
                    }}
                  >
                    Accordion.Content
                  </div>

                  <Accordion.Content style={{ padding: "12px" }}>
                    A robust platform enables seamless scaling from startups to
                    enterprise-level applications. It provides infrastructure,
                    tools, and services that grow with your business needs,
                    reducing technical debt and avoiding costly migrations as
                    requirements evolve.
                  </Accordion.Content>
                </div>
              </Accordion.Item>
            </div>

            {/* Additional items using same primitive structure... */}
            <div
              style={{
                border: "2px solid #ea580c",
                borderRadius: "6px",
                margin: "8px 4px",
              }}
            >
              <Accordion.Item value="controlled-2">
                <Accordion.Header>
                  <Accordion.Trigger
                    style={{
                      width: "100%",
                      padding: "12px",
                      display: "flex",
                      alignItems: "center",
                      gap: "8px",
                      background: "none",
                      border: "none",
                      cursor: "pointer",
                    }}
                  >
                    {controlledValue === "controlled-2" ? (
                      <ArrowDown />
                    ) : (
                      <ArrowRight />
                    )}
                    Developer Experience
                  </Accordion.Trigger>
                </Accordion.Header>
                <Accordion.Content style={{ padding: "12px" }}>
                  Modern platforms prioritize developer productivity through
                  intuitive APIs, comprehensive documentation, local development
                  tools, and integrated debugging capabilities. This reduces
                  onboarding time and accelerates feature development while
                  maintaining code quality.
                </Accordion.Content>
              </Accordion.Item>
            </div>

            <div
              style={{
                border: "2px solid #ea580c",
                borderRadius: "6px",
                margin: "8px 4px",
              }}
            >
              <Accordion.Item value="controlled-3">
                <Accordion.Header>
                  <Accordion.Trigger
                    style={{
                      width: "100%",
                      padding: "12px",
                      display: "flex",
                      alignItems: "center",
                      gap: "8px",
                      background: "none",
                      border: "none",
                      cursor: "pointer",
                    }}
                  >
                    {controlledValue === "controlled-3" ? (
                      <ArrowDown />
                    ) : (
                      <ArrowRight />
                    )}
                    Ecosystem and Community
                  </Accordion.Trigger>
                </Accordion.Header>
                <Accordion.Content style={{ padding: "12px" }}>
                  A thriving platform ecosystem includes third-party
                  integrations, community contributions, extensive plugin
                  libraries, and active support channels. This network effect
                  creates sustainable competitive advantages and reduces the
                  need to build everything from scratch.
                </Accordion.Content>
              </Accordion.Item>
            </div>
          </Accordion.Root>
        </div>
      </section>

      <div
        style={{
          background: "#f0f9ff",
          border: "2px solid #0ea5e9",
          borderRadius: "8px",
          padding: "16px",
          marginTop: "32px",
        }}
      >
        <h3>Key Takeaway:</h3>
        <p style={{ margin: 0 }}>
          All three accordion versions use the{" "}
          <strong>exact same primitives</strong> (Root, Item, Header, Trigger,
          Content). The only differences are the props passed to{" "}
          <code>Accordion.Root</code> and how state is managed. This
          demonstrates the power of primitive-based component libraries -
          consistent building blocks with flexible behavior.
        </p>
      </div>
    </div>
  );
}
