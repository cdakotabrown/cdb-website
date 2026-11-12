import { useEffect, useRef, useState } from "react";
import { Link, useSearchParams } from "react-router-dom";
import { ArrowLeft, ArrowUpRight, ChevronRight, Search, X } from "lucide-react";
import { categories, orders, getOrderPath } from "../content/labOrders";
import { searchOrders } from "../lib/labSearch";
import { useDocumentTitle } from "../hooks/useDocumentTitle";
import styles from "./LabReference.module.css";

export default function LabReference() {
  useDocumentTitle("Laboratory Order Reference");
  const [params, setParams] = useSearchParams();
  const [query, setQuery] = useState("");
  const heading = useRef(null);
  const selected = orders.find((order) => order.id === params.get("test"));
  const path = selected ? getOrderPath(selected) : {};
  const category =
    path.category ??
    categories.find((item) => item.id === params.get("category"));
  const section =
    path.section ??
    category?.sections.find((item) => item.id === params.get("section"));
  const searching = Boolean(query.trim());
  const visibleOrders = searching
    ? searchOrders(query)
    : orders.filter(
        (order) => section && order.categoryIds.includes(section.id)
      );
  const invalidTest = params.has("test") && !selected;

  useEffect(() => {
    if (selected) heading.current?.focus({ preventScroll: true });
  }, [selected]);

  function browse(next = {}) {
    setQuery("");
    setParams(next);
  }

  return (
    <div className={`container ${styles.wrapper}`}>
      <Link to="/" className={styles.back}>
        <ArrowLeft size={14} /> Home
      </Link>
      <article className={styles.console}>
        <header className={styles.header}>
          <div className={styles.topline}>
            <span>CDB / REFERENCE SYSTEMS</span>
            <span className={styles.status}>
              <span /> DEMO CATALOG
            </span>
          </div>
          <div className={styles.titleRow}>
            <div>
              <p className={styles.eyebrow}>Laboratory / 01</p>
              <h1>
                Order reference<span className={styles.period}>.</span>
              </h1>
              <p className={styles.intro}>
                Find the order. Understand the test.
              </p>
            </div>
            <div className={styles.instrument} aria-hidden="true">
              <span />
              <span />
              <span />
              <span />
              <span />
              <span />
              <span />
              <span />
            </div>
          </div>
          <div className={styles.headerFooter}>
            <span>TESTS / PANELS / CONNECTIONS</span>
            <span>{String(orders.length).padStart(3, "0")} RECORDS</span>
          </div>
        </header>

        <div className={styles.body}>
          <label className={styles.eyebrow} htmlFor="lab-search">
            01 / Search directory
          </label>
          <div className={styles.searchBox}>
            <Search size={20} aria-hidden="true" />
            <input
              id="lab-search"
              type="search"
              value={query}
              onChange={(event) => setQuery(event.target.value)}
              placeholder="Find a test, panel, or abbreviation"
              autoComplete="off"
            />
            {query && (
              <button
                className={styles.clear}
                onClick={() => setQuery("")}
                aria-label="Clear search"
              >
                <X size={18} />
              </button>
            )}
          </div>
          <p className={styles.searchHint}>
            Try “PLT”, “lipids”, or “thyroid”. Search across all categories.
          </p>

          <nav aria-label="Directory breadcrumb" className={styles.breadcrumb}>
            <button onClick={() => browse()}>All categories</button>
            {category && (
              <>
                <ChevronRight size={13} />
                <button onClick={() => browse({ category: category.id })}>
                  {category.name}
                </button>
              </>
            )}
            {section && (
              <>
                <ChevronRight size={13} />
                <button
                  onClick={() =>
                    browse({ category: category.id, section: section.id })
                  }
                >
                  {section.name}
                </button>
              </>
            )}
            {selected && (
              <>
                <ChevronRight size={13} />
                <span aria-current="page">{selected.name}</span>
              </>
            )}
          </nav>
          {invalidTest && (
            <p role="status" className={styles.notice}>
              That order is not in the demo catalog. Browse below or search for
              another test.
            </p>
          )}

          <div className={selected ? styles.workspace : undefined}>
            <section
              aria-label={searching ? "Search results" : "Browse directory"}
            >
              <div className={styles.sectionHeader}>
                <h2>
                  {searching
                    ? "Search results"
                    : section
                      ? section.name
                      : category
                        ? category.name
                        : "Browse by discipline"}
                </h2>
                <span>
                  {searching || section
                    ? `${visibleOrders.length} ORDERS`
                    : `${category ? category.sections.length : categories.length} SECTIONS`}
                </span>
              </div>
              {searching && (
                <p role="status" className={styles.searchHint}>
                  {visibleOrders.length
                    ? `${visibleOrders.length} matching orders`
                    : "No matching orders. Try a test name or abbreviation, or clear your search to browse."}
                </p>
              )}
              {!searching && !section && (
                <div className={styles.categoryGrid}>
                  {(category ? category.sections : categories).map(
                    (item, index) => (
                      <button
                        key={item.id}
                        className={styles.categoryCard}
                        onClick={() =>
                          browse(
                            category
                              ? { category: category.id, section: item.id }
                              : { category: item.id }
                          )
                        }
                      >
                        <span className={styles.cardTop}>
                          <span>
                            {String(index + 1).padStart(2, "0")} /{" "}
                            {category ? "SECTION" : "DISCIPLINE"}
                          </span>
                          <ArrowUpRight size={18} />
                        </span>
                        <strong>{item.name}</strong>
                        <span className={styles.cardBrief}>{item.brief}</span>
                        <span className={styles.cardBottom}>
                          {category
                            ? `${orders.filter((order) => order.categoryIds.includes(item.id)).length} orders`
                            : `${item.sections.length} sections`}
                          <ChevronRight size={16} />
                        </span>
                      </button>
                    )
                  )}
                </div>
              )}
              {(searching || section) && (
                <div className={styles.orderList}>
                  {visibleOrders.map((order) => {
                    const orderPath = getOrderPath(order);
                    return (
                      <button
                        key={order.id}
                        className={`${styles.order} ${selected?.id === order.id ? styles.selected : ""}`}
                        aria-pressed={selected?.id === order.id}
                        onClick={() => setParams({ test: order.id })}
                      >
                        <span className={styles.orderTitle}>
                          <strong>{order.name}</strong>
                          <span className={styles.kind}>{order.kind}</span>
                        </span>
                        <span className={styles.cardBrief}>{order.brief}</span>
                        <span className={styles.orderMeta}>
                          {orderPath.category.name} / {orderPath.section.name}
                          <ChevronRight size={16} />
                        </span>
                      </button>
                    );
                  })}
                </div>
              )}
            </section>

            {selected && (
              <section className={styles.detail} aria-label="Order details">
                <div className={styles.detailTop}>
                  <span>02 / ORDER FILE</span>
                  <button
                    onClick={() =>
                      setParams({ category: category.id, section: section.id })
                    }
                    aria-label="Close order details"
                  >
                    <X size={18} />
                  </button>
                </div>
                <span className={styles.kind}>{selected.kind}</span>
                <h2 ref={heading} tabIndex={-1}>
                  {selected.name}
                </h2>
                <p className={styles.aliases}>{selected.aliases.join(" / ")}</p>
                <p>{selected.brief}</p>
                <dl className={styles.metadata}>
                  <div>
                    <dt>Discipline</dt>
                    <dd>{category.name}</dd>
                  </div>
                  <div>
                    <dt>Section</dt>
                    <dd>{section.name}</dd>
                  </div>
                  <div>
                    <dt>Record ID</dt>
                    <dd>{selected.id}</dd>
                  </div>
                  <div>
                    <dt>Source status</dt>
                    <dd>Demo · not clinically reviewed</dd>
                  </div>
                </dl>
                {selected.memberOrderIds && (
                  <div className={styles.members}>
                    <h3>Panel components</h3>
                    <p>{selected.membershipNote}</p>
                    {selected.memberOrderIds.map((id) => {
                      const member = orders.find((order) => order.id === id);
                      return (
                        <button
                          key={id}
                          onClick={() => setParams({ test: id })}
                        >
                          {member.name}
                          <ArrowUpRight size={15} />
                        </button>
                      );
                    })}
                  </div>
                )}
                {orders.some((order) =>
                  order.memberOrderIds?.includes(selected.id)
                ) && (
                  <div className={styles.members}>
                    <h3>Linked panels</h3>
                    {orders
                      .filter((order) =>
                        order.memberOrderIds?.includes(selected.id)
                      )
                      .map((panel) => (
                        <button
                          key={panel.id}
                          onClick={() => setParams({ test: panel.id })}
                        >
                          {panel.name}
                          <ArrowUpRight size={15} />
                        </button>
                      ))}
                  </div>
                )}
                <p className={styles.shareHint}>
                  The address bar links directly to this order.
                </p>
              </section>
            )}
          </div>
          <footer className={styles.footer}>
            <span className={styles.eyebrow}>Reference prototype / v0.1</span>
            <p>
              Illustrative catalog for exploring the interface. Descriptions and
              panel membership are demo content; confirm clinical orders and
              specimen requirements in your laboratory’s approved test
              directory.
            </p>
          </footer>
        </div>
      </article>
    </div>
  );
}
