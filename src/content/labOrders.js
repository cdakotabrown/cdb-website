// Demonstration records, not a clinical test catalog. Replace with reviewed,
// licensed source data; retain stable IDs for shared URLs and panel membership.
export const categories = [
  {
    id: "hematology",
    name: "Hematology",
    brief: "Blood cells, platelets, and coagulation.",
    sections: [
      {
        id: "blood-counts",
        name: "Blood counts",
        brief: "Cell counts and blood composition.",
      },
      {
        id: "coagulation",
        name: "Coagulation",
        brief: "Tests related to clot formation.",
      },
    ],
  },
  {
    id: "chemistry",
    name: "Chemistry",
    brief: "Metabolism, organ function, and electrolytes.",
    sections: [
      {
        id: "lipids",
        name: "Lipids",
        brief: "Cholesterol and triglyceride measurements.",
      },
      {
        id: "metabolic",
        name: "Metabolic tests",
        brief: "Glucose, electrolytes, and related chemistry.",
      },
    ],
  },
  {
    id: "microbiology",
    name: "Microbiology",
    brief: "Cultures and detection of microorganisms.",
    sections: [
      {
        id: "cultures",
        name: "Cultures",
        brief: "Orders that look for microbial growth.",
      },
    ],
  },
  {
    id: "endocrinology",
    name: "Endocrinology",
    brief: "Hormones and endocrine function.",
    sections: [
      {
        id: "thyroid",
        name: "Thyroid",
        brief: "Thyroid-related hormone measurements.",
      },
    ],
  },
];

export const orders = [
  {
    id: "cbc",
    name: "Complete blood count",
    aliases: ["CBC", "blood count"],
    kind: "panel",
    brief:
      "A group of measurements describing red cells, white cells, and platelets in blood.",
    categoryIds: ["blood-counts"],
    memberOrderIds: ["platelet-count"],
    membershipNote:
      "Only the platelet count is linked in this demo. A complete CBC includes additional measurements.",
  },
  {
    id: "platelet-count",
    name: "Platelet count",
    aliases: ["PLT", "thrombocyte count", "blood platelet count"],
    kind: "test",
    brief:
      "Measures the number of platelets in blood. Platelets contribute to clot formation.",
    categoryIds: ["blood-counts"],
  },
  {
    id: "pt",
    name: "Prothrombin time",
    aliases: ["PT", "INR"],
    kind: "test",
    brief:
      "Measures clotting time using a specific laboratory method. INR is a standardized calculation associated with PT.",
    categoryIds: ["coagulation"],
  },
  {
    id: "aptt",
    name: "Activated partial thromboplastin time",
    aliases: ["aPTT", "PTT"],
    kind: "test",
    brief:
      "Measures clotting time using a different method from prothrombin time.",
    categoryIds: ["coagulation"],
  },
  {
    id: "lipid-panel",
    name: "Lipid panel",
    aliases: ["lipid profile", "cholesterol panel"],
    kind: "panel",
    brief:
      "Groups several blood lipid measurements into one order. The exact components depend on the performing laboratory.",
    categoryIds: ["lipids"],
    memberOrderIds: ["total-cholesterol", "hdl", "ldl", "triglycerides"],
    membershipNote:
      "Illustrative components only. LDL may be calculated or directly measured; verify the performing laboratory’s catalog.",
  },
  {
    id: "total-cholesterol",
    name: "Total cholesterol",
    aliases: ["TC", "CHOL"],
    kind: "test",
    brief: "Measures the total cholesterol concentration in blood.",
    categoryIds: ["lipids"],
  },
  {
    id: "hdl",
    name: "HDL cholesterol",
    aliases: ["HDL", "HDL-C"],
    kind: "test",
    brief: "Measures cholesterol associated with high-density lipoproteins.",
    categoryIds: ["lipids"],
  },
  {
    id: "ldl",
    name: "LDL cholesterol",
    aliases: ["LDL", "LDL-C"],
    kind: "test",
    brief:
      "Reports cholesterol associated with low-density lipoproteins. The result may be calculated or directly measured.",
    categoryIds: ["lipids"],
  },
  {
    id: "triglycerides",
    name: "Triglycerides",
    aliases: ["TG", "TRIG"],
    kind: "test",
    brief: "Measures triglycerides, a type of lipid carried in blood.",
    categoryIds: ["lipids"],
  },
  {
    id: "glucose",
    name: "Glucose",
    aliases: ["GLU", "blood sugar"],
    kind: "test",
    brief: "Measures glucose concentration in a specimen.",
    categoryIds: ["metabolic"],
  },
  {
    id: "blood-culture",
    name: "Blood culture",
    aliases: ["BC", "BCx"],
    kind: "test",
    brief:
      "Cultures a blood specimen to look for microorganisms that can grow under the laboratory’s culture conditions.",
    categoryIds: ["cultures"],
  },
  {
    id: "urine-culture",
    name: "Urine culture",
    aliases: ["UCx"],
    kind: "test",
    brief: "Cultures a urine specimen to look for microbial growth.",
    categoryIds: ["cultures"],
  },
  {
    id: "tsh",
    name: "Thyroid-stimulating hormone",
    aliases: ["TSH", "thyrotropin"],
    kind: "test",
    brief:
      "Measures thyroid-stimulating hormone, a pituitary hormone involved in regulating thyroid function.",
    categoryIds: ["thyroid"],
  },
  {
    id: "free-t4",
    name: "Free thyroxine",
    aliases: ["FT4", "free T4"],
    kind: "test",
    brief: "Measures the unbound fraction of the thyroid hormone thyroxine.",
    categoryIds: ["thyroid"],
  },
];

export function getOrderPath(order) {
  const category = categories.find((item) =>
    item.sections.some((section) => order.categoryIds.includes(section.id))
  );
  const section = category?.sections.find((item) =>
    order.categoryIds.includes(item.id)
  );
  return { category, section };
}
