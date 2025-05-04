const express = require("express");
const PORT = process.env.PORT || 8000; //hidden port
const app = express();
app.use(express.json());
app.listen(8000, () => {
  console.log(`server is running at  ${PORT}`);
});

const drugs = [
  {
    id: 1,
    name: "Amoxicillin",
    category: "Antibiotic",
    dosageMg: 500,
    isPrescriptionOnly: true,
    stock: 120,
    manufacturer: "Pfizer",
  },

  {
    id: 2,
    name: "Paracetamol",
    category: "Analgesic",
    dosageMg: 1000,
    isPrescriptionOnly: false,
    stock: 200,
    manufacturer: "GSK",
  },

  {
    id: 3,
    name: "Ibuprofen",
    category: "Analgesic",
    dosageMg: 400,
    isPrescriptionOnly: false,
    stock: 150,
    manufacturer: "Bayer",
  },

  {
    id: 4,
    name: "Chloroquine",
    category: "Antimalarial",
    dosageMg: 250,
    isPrescriptionOnly: true,
    stock: 80,
    manufacturer: "Sanofi",
  },

  {
    id: 5,
    name: "Ciprofloxacin",
    category: "Antibiotic",
    dosageMg: 500,
    isPrescriptionOnly: true,
    stock: 70,
    manufacturer: "Pfizer",
  },

  {
    id: 6,
    name: "Loratadine",
    category: "Antihistamine",
    dosageMg: 10,
    isPrescriptionOnly: false,
    stock: 160,
    manufacturer: "Novartis",
  },

  {
    id: 7,
    name: "Metformin",
    category: "Antidiabetic",
    dosageMg: 850,
    isPrescriptionOnly: true,
    stock: 140,
    manufacturer: "Teva",
  },

  {
    id: 8,
    name: "Artemether",
    category: "Antimalarial",
    dosageMg: 20,
    isPrescriptionOnly: true,
    stock: 60,
    manufacturer: "Roche",
  },

  {
    id: 9,
    name: "Aspirin",
    category: "Analgesic",
    dosageMg: 300,
    isPrescriptionOnly: false,
    stock: 180,
    manufacturer: "Bayer",
  },

  {
    id: 10,
    name: "Omeprazole",
    category: "Antacid",
    dosageMg: 20,
    isPrescriptionOnly: true,
    stock: 90,
    manufacturer: "AstraZeneca",
  },

  {
    id: 11,
    name: "Azithromycin",
    category: "Antibiotic",
    dosageMg: 250,
    isPrescriptionOnly: true,
    stock: 50,
    manufacturer: "Pfizer",
  },

  {
    id: 12,
    name: "Cetirizine",
    category: "Antihistamine",
    dosageMg: 10,
    isPrescriptionOnly: false,
    stock: 110,
    manufacturer: "Novartis",
  },

  {
    id: 13,
    name: "Insulin",
    category: "Antidiabetic",
    dosageMg: 100,
    isPrescriptionOnly: true,
    stock: 30,
    manufacturer: "Novo Nordisk",
  },

  {
    id: 14,
    name: "Artemisinin",
    category: "Antimalarial",
    dosageMg: 100,
    isPrescriptionOnly: true,
    stock: 50,
    manufacturer: "GSK",
  },

  {
    id: 15,
    name: "Codeine",
    category: "Analgesic",
    dosageMg: 30,
    isPrescriptionOnly: true,
    stock: 20,
    manufacturer: "Teva",
  },

  {
    id: 16,
    name: "Vitamin C",
    category: "Supplement",
    dosageMg: 500,
    isPrescriptionOnly: false,
    stock: 300,
    manufacturer: "Nature’s Bounty",
  },

  {
    id: 17,
    name: "Ranitidine",
    category: "Antacid",
    dosageMg: 150,
    isPrescriptionOnly: false,
    stock: 90,
    manufacturer: "Sanofi",
  },

  {
    id: 18,
    name: "Doxycycline",
    category: "Antibiotic",
    dosageMg: 100,
    isPrescriptionOnly: true,
    stock: 40,
    manufacturer: "Pfizer",
  },

  {
    id: 19,
    name: "Tramadol",
    category: "Analgesic",
    dosageMg: 50,
    isPrescriptionOnly: true,
    stock: 45,
    manufacturer: "Teva",
  },

  {
    id: 20,
    name: "Folic Acid",
    category: "Supplement",
    dosageMg: 5,
    isPrescriptionOnly: false,
    stock: 250,
    manufacturer: "Nature’s Bounty",
  },
];

//question 1
app.get("/antibiotic", (req, res) => {
  const antibiotic = drugs.filter((drugs) => {
    return drugs.category === "Antibiotic";
  });
  res.json(antibiotic);
});
//question 2
app.get("/names", (req, res) => {
  const drugNames = drugs.map((drugs) => {
    return drugs.name.toLocaleLowerCase();
  });
  res.json(drugNames);
});
//question 3
app.post("/by-category", (req, res) => {
  const { category } = req.body;
  const byCategory = drugs.filter((drugs) => drugs.category === category);
  res.json(byCategory);
});
//question 4
app.get("/namesManufactures", (req, res) => {
  const details = drugs.map((drugs) => {
    return {
      fname: drugs.name,
      manufacturer: drugs.manufacturer,
    };
  });
  res.json(details);
});
//question 5
app.get("/prescription", (req, res) => {
  const isPrescription = drugs.filter((drugs) => {
    return drugs.isPrescriptionOnly === true;
  });
  res.json(isPrescription);
});
//question 6
app.get("/formatted", (req, res) => {
  const newFormat = drugs.map((drugs) => {
    return drugs;
  });
  res.json(newFormat);
});
//question7
app.get("/lowstock", (req, res) => {
  const lowStock = drugs.filter((drugs) => {
    return drugs.stock < 50;
  });
  res.json(lowStock);
});
//question8
app.get("/non-prescription", (req, res) => {
  const nonPrescription = drugs.filter((drugs) => {
    return drugs.isPrescriptionOnly === false;
  });
  res.json(nonPrescription);
});
//question9
app.post("/manufacturer-count", (req, res) => {
  const manufacturer = req.body.manufacturer;
  let count = 0;
  drugs.forEach((drugs) => {
    if (manufacturer === drugs.manufacturer) {
      count++;
    }
  });
  res.json(manufacturer, count);
});
// question 10
app.get("/count-analgesics", (req, res) => {
  const cat = drugs.filter((drugs)=>{
    return drugs.category === "Analgesic"
  })
  
  res.json(cat)
});
