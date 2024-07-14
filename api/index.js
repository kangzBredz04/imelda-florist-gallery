import express from "express";
import "dotenv/config";
import cors from "cors";

const datas = [
  {
    id: 1,
    name: "Mawar Merah",
    description: "Bunga mawar merah segar.",
    price: 10000,
    image:
      "https://i.pinimg.com/564x/3a/fa/9b/3afa9b1a9230db6c24fe423bca515d25.jpg",
    category: "Mawar",
    tags: ["Mawar", "Merah", "Segar"],
    stock: 50,
    availability: true,
  },

  {
    id: 2,
    name: "Tulip",
    description: "Bunga tulip yang cantik.",
    price: 12000,
    image:
      "https://i.pinimg.com/736x/67/eb/1e/67eb1e07e2368bb702e736da1683b831.jpg",
    category: "Tulip",
    tags: ["Tulip", "Cantik"],
    stock: 40,
    availability: true,
  },
  {
    id: 3,
    name: "Lili",
    description: "Bunga lili yang elegan.",
    price: 15000,
    image:
      "https://i.pinimg.com/564x/82/ca/dc/82cadc8f425cd5cc05b0f65e632e169e.jpg",
    category: "Lili",
    tags: ["Lili", "Elegan"],
    stock: 30,
    availability: true,
  },
  {
    id: 4,
    name: "Anggrek",
    description: "Bunga anggrek yang eksotis.",
    price: 18000,
    image:
      "https://i.pinimg.com/564x/21/ad/c8/21adc842ee04f14c2cf5aab4eafc5756.jpg",
    category: "Anggrek",
    tags: ["Anggrek", "Eksotis"],
    stock: 25,
    availability: true,
  },
  {
    id: 5,
    name: "Peony",
    description: "Bunga peony yang indah.",
    price: 25000,
    image:
      "https://i.pinimg.com/564x/c6/9e/1f/c69e1fca34a15403fd9e1f0a0bb51130.jpg",
    category: "Peony",
    tags: ["Peony", "Indah"],
    stock: 20,
    availability: true,
  },
  {
    id: 6,
    name: "Anyelir",
    description: "Bunga anyelir yang klasik.",
    price: 8000,
    image:
      "https://i.pinimg.com/564x/b0/6c/c4/b06cc408d8333cffddeec78005d6c97d.jpg",
    category: "Anyelir",
    tags: ["Anyelir", "Klasik"],
    stock: 35,
    availability: true,
  },
  {
    id: 7,
    name: "Gerbera",
    description: "Bunga gerbera yang cerah.",
    price: 15000,
    image:
      "https://i.pinimg.com/564x/ff/62/70/ff627087b712dfc87f4a96afb2578dbf.jpg",
    category: "Gerbera",
    tags: ["Gerbera", "Cerah"],
    stock: 30,
    availability: true,
  },
  {
    id: 8,
    name: "Krisan",
    description: "Bunga krisan yang eksotis.",
    price: 12000,
    image:
      "https://i.pinimg.com/564x/67/b6/44/67b64404f6e794efdf81739ce1af0762.jpg",
    category: "Krisan",
    tags: ["Krisan", "Eksotis"],
    stock: 28,
    availability: true,
  },
  {
    id: 9,
    name: "Baby Breath",
    description: "Bunga baby breath yang lembut.",
    price: 9000,
    image:
      "https://i.pinimg.com/564x/30/4b/f7/304bf734cecee11b15b8f4aad1eed1dd.jpg",
    category: "Baby Breath",
    tags: ["Baby Breath", "Lembut"],
    stock: 40,
    availability: true,
  },
  {
    id: 10,
    name: "Hydrangea",
    description: "Bunga hydrangea yang elegan.",
    price: 18000,
    image:
      "https://i.pinimg.com/564x/1d/ea/e9/1deae9ee5d648e64c1f511bf80576255.jpg",
    category: "Hydrangea",
    tags: ["Hydrangea", "Elegan"],
    stock: 22,
    availability: true,
  },
  {
    id: 11,
    name: "Freesia",
    description: "Bunga freesia yang harum.",
    price: 10000,
    image:
      "https://i.pinimg.com/564x/eb/a0/83/eba0836b0881772057239c1fde026b54.jpg",
    category: "Freesia",
    tags: ["Freesia", "Harum"],
    stock: 32,
    availability: true,
  },
  {
    id: 12,
    name: "Alstroemeria",
    description: "Bunga alstroemeria yang colorful.",
    price: 12000,
    image:
      "https://i.pinimg.com/564x/02/3b/ee/023bee7cc43f697ba9347853e6fbd251.jpg",
    category: "Alstroemeria",
    tags: ["Alstroemeria", "Colorful"],
    stock: 25,
    availability: true,
  },
  {
    id: 13,
    name: "Dahlia",
    description: "Bunga dahlia yang cantik.",
    price: 16000,
    image:
      "https://i.pinimg.com/564x/21/19/5a/21195acf1a8f809f966581288a54511e.jpg",
    category: "Dahlia",
    tags: ["Dahlia", "Cantik"],
    stock: 18,
    availability: true,
  },
  {
    id: 14,
    name: "Ranunculus",
    description: "Bunga ranunculus yang unik.",
    price: 14000,
    image:
      "https://i.pinimg.com/564x/1c/6a/9d/1c6a9dfed86a5e1d619b32dba88bfaf1.jpg",
    category: "Ranunculus",
    tags: ["Ranunculus", "Unik"],
    stock: 20,
    availability: true,
  },
  {
    id: 15,
    name: "Anemone",
    description: "Bunga anemone yang menawan.",
    price: 13000,
    image:
      "https://i.pinimg.com/564x/5c/a1/2f/5ca12f2366f0246143315acc04057027.jpg",
    category: "Anemone",
    tags: ["Anemone", "Menawan"],
    stock: 22,
    availability: true,
  },
  {
    id: 16,
    name: "Bunga Matahari",
    description: "Bunga matahari yang ceria.",
    price: 11000,
    image:
      "https://i.pinimg.com/564x/45/bc/d9/45bcd964f515d1f62f567b7ece744b9c.jpg",
    category: "Bunga Matahari",
    tags: ["Bunga Matahari", "Ceria"],
    stock: 28,
    availability: true,
  },
  {
    id: 17,
    name: "Bunga Calla",
    description: "Bunga calla yang elegan.",
    price: 16000,
    image:
      "https://i.pinimg.com/736x/34/b8/4a/34b84a2cff475aa43ec585ee74d4c67b.jpg",
    category: "Bunga Calla",
    tags: ["Bunga Calla", "Elegan"],
    stock: 50,
    availability: true,
  },

  {
    id: 18,
    name: "Bunga Camelia",
    description: "Bunga camelia yang anggun.",
    price: 17000,
    image:
      "https://i.pinimg.com/564x/0d/43/8e/0d438ed3e0d8a130b818b7dd4e4303f7.jpg",
    category: "Bunga Camelia",
    tags: ["Bunga Camelia", "Anggun"],
    stock: 25,
    availability: true,
  },
  {
    id: 19,
    name: "Bunga Gardenia",
    description: "Bunga gardenia yang harum.",
    price: 14000,
    image:
      "https://i.pinimg.com/564x/73/0b/d4/730bd44615e01c63160ba5855e110c48.jpg",
    category: "Bunga Gardenia",
    tags: ["Bunga Gardenia", "Harum"],
    stock: 30,
    availability: true,
  },
  {
    id: 20,
    name: "Bunga Iris",
    description: "Bunga iris yang elegan.",
    price: 16000,
    image:
      "https://i.pinimg.com/564x/00/f6/48/00f6482aa35a8d6faa648e2f5b36713e.jpg",
    category: "Bunga Iris",
    tags: ["Bunga Iris", "Elegan"],
    stock: 20,
    availability: true,
  },
  {
    id: 21,
    name: "Bunga Lisianthus",
    description: "Bunga lisianthus yang indah.",
    price: 15000,
    image:
      "https://i.pinimg.com/564x/2f/cd/14/2fcd1486ced482f21d6d9029d1dd50f2.jpg",
    category: "Bunga Lisianthus",
    tags: ["Bunga Lisianthus", "Indah"],
    stock: 22,
    availability: true,
  },
  {
    id: 22,
    name: "Bunga Magnolia",
    description: "Bunga magnolia yang anggun.",
    price: 17000,
    image:
      "https://i.pinimg.com/564x/f6/28/0c/f6280c1c8cbc8c8faeb5d7b0adeb1449.jpg",
    category: "Bunga Magnolia",
    tags: ["Bunga Magnolia", "Anggun"],
    stock: 18,
    availability: true,
  },
  {
    id: 23,
    name: "Bunga Marigold",
    description: "Bunga marigold yang cerah.",
    price: 12000,
    image:
      "https://i.pinimg.com/564x/1c/35/13/1c3513e9c4b6d879a834b381b2018992.jpg",
    category: "Bunga Marigold",
    tags: ["Bunga Marigold", "Cerah"],
    stock: 25,
    availability: true,
  },
  {
    id: 24,
    name: "Bunga Poppy",
    description: "Bunga poppy yang eksotis.",
    price: 13000,
    image:
      "https://i.pinimg.com/564x/1b/bb/3e/1bbb3e6a211e9178bebf380a8745368e.jpg",
    category: "Bunga Poppy",
    tags: ["Bunga Poppy", "Eksotis"],
    stock: 30,
    availability: true,
  },
  {
    id: 25,
    name: "Bunga Snapdragons",
    description: "Bunga snapdragons yang menarik.",
    price: 11000,
    image:
      "https://i.pinimg.com/564x/56/a5/8e/56a58e95a781d2fd10480c2d5f1c51b0.jpg",
    category: "Bunga Snapdragons",
    tags: ["Bunga Snapdragons", "Menarik"],
    stock: 35,
    availability: true,
  },
  {
    id: 26,
    name: "Bunga Stock",
    description: "Bunga stock yang elegan.",
    price: 14000,
    image:
      "https://i.pinimg.com/564x/a8/3a/1a/a83a1a88d5465e754e61ff8d997c12bd.jpg",
    category: "Bunga Stock",
    tags: ["Bunga Stock", "Elegan"],
    stock: 28,
    availability: true,
  },
  {
    id: 27,
    name: "Bunga Sweet Pea",
    description: "Bunga sweet pea yang manis.",
    price: 12000,
    image:
      "https://i.pinimg.com/564x/53/1a/72/531a72ea869d4eb97e9e1c5199241cd8.jpg",
    category: "Bunga Sweet Pea",
    tags: ["Bunga Sweet Pea", "Manis"],
    stock: 30,
    availability: true,
  },
  {
    id: 28,
    name: "Bunga Waxflower",
    description: "Bunga waxflower yang halus.",
    price: 15000,
    image:
      "https://i.pinimg.com/564x/17/dd/df/17dddf38282fd08359a7c005d7a02b17.jpg",
    category: "Bunga Waxflower",
    tags: ["Bunga Waxflower", "Halus"],
    stock: 25,
    availability: true,
  },
  {
    id: 29,
    name: "Bunga Zinnia",
    description: "Bunga zinnia yang cerah.",
    price: 11000,
    image:
      "https://i.pinimg.com/564x/7f/9b/1e/7f9b1ee59fb51c07e2609a78532e515f.jpg",
    category: "Bunga Zinnia",
    tags: ["Bunga Zinnia", "Cerah"],
    stock: 32,
    availability: true,
  },
  {
    id: 30,
    name: "Bunga Delphinium",
    description: "Bunga delphinium yang indah.",
    price: 13000,
    image:
      "https://i.pinimg.com/564x/3c/1c/b5/3c1cb534f96983b824d81c40b0a5e29d.jpg",
    category: "Bunga Delphinium",
    tags: ["Bunga Delphinium", "Indah"],
    stock: 28,
    availability: true,
  },
  {
    id: 31,
    name: "Bunga Stephanotis",
    description: "Bunga stephanotis yang anggun.",
    price: 16000,
    image:
      "https://i.pinimg.com/564x/04/d9/a2/04d9a29a13a15438d3394f4d9e303a33.jpg",
    category: "Bunga Stephanotis",
    tags: ["Bunga Stephanotis", "Anggun"],
    stock: 20,
    availability: true,
  },
  {
    id: 32,
    name: "Bunga Veronica",
    description: "Bunga veronica yang menawan.",
    price: 14000,
    image:
      "https://i.pinimg.com/564x/35/c8/32/35c832d5d695ee443ea1ff51a4370495.jpg",
    category: "Bunga Veronica",
    tags: ["Bunga Veronica", "Menawan"],
    stock: 22,
    availability: true,
  },
  {
    id: 33,
    name: "Bunga Eustoma",
    description: "Bunga eustoma yang cantik.",
    price: 15000,
    image:
      "https://i.pinimg.com/564x/5e/6b/c5/5e6bc50f4583540de5a41e97564aa1d6.jpg",
    category: "Bunga Eustoma",
    tags: ["Bunga Eustoma", "Cantik"],
    stock: 18,
    availability: true,
  },
  {
    id: 34,
    name: "Bunga Helenium",
    description: "Bunga helenium yang ceria.",
    price: 12000,
    image:
      "https://i.pinimg.com/564x/fa/e1/98/fae19860db9daba30cc51bf657036da8.jpg",
    category: "Bunga helenium",
    tags: ["Bunga helenium", "Cantik"],
    stock: 18,
    availability: true,
  },
  {
    id: 35,
    name: "Bunga Heather",
    description: "Bunga heather yang elegan.",
    price: 13000,
    image:
      "https://i.pinimg.com/564x/52/17/a4/5217a42e01d82f51f92babd0f93cf66c.jpg",
    category: "Bunga Heather",
    tags: ["Bunga Heather", "Elegan"],
    stock: 30,
    availability: true,
  },
  {
    id: 36,
    name: "Bunga Hyacinth",
    description: "Bunga hyacinth yang harum.",
    price: 14000,
    image:
      "https://i.pinimg.com/564x/50/dc/c6/50dcc6100eeb364da34d3a8c9a3d3450.jpg",
    category: "Bunga Hyacinth",
    tags: ["Bunga Hyacinth", "Harum"],
    stock: 22,
    availability: true,
  },
  {
    id: 37,
    name: "Bunga Lavender",
    description: "Bunga lavender yang menenangkan.",
    price: 15000,
    image:
      "https://i.pinimg.com/564x/15/c2/ac/15c2acaa2132c737c90ab76d8c771490.jpg",
    category: "Bunga Lavender",
    tags: ["Bunga Lavender", "Menenangkan"],
    stock: 20,
    availability: true,
  },
  {
    id: 38,
    name: "Bunga Lilac",
    description: "Bunga lilac yang manis.",
    price: 16000,
    image:
      "https://i.pinimg.com/564x/d8/bf/6b/d8bf6b5c4ee4af6083867775d87cccbd.jpg",
    category: "Bunga Lilac",
    tags: ["Bunga Lilac", "Manis"],
    stock: 18,
    availability: true,
  },
  {
    id: 39,
    name: "Bunga Nerine",
    description: "Bunga nerine yang eksotis.",
    price: 17000,
    image:
      "https://i.pinimg.com/564x/1e/9c/b6/1e9cb6535971d2ced61a728f5943d76d.jpg",
    category: "Bunga Nerine",
    tags: ["Bunga Nerine", "Eksotis"],
    stock: 25,
    availability: true,
  },
  {
    id: 40,
    name: "Bunga Phlox",
    description: "Bunga phlox yang warna-warni.",
    price: 12000,
    image:
      "https://i.pinimg.com/564x/03/21/2f/03212f0d9e7b71d2d387dcd4c2eb1a43.jpg",
    category: "Bunga Phlox",
    tags: ["Bunga Phlox", "Warna-warni"],
    stock: 28,
    availability: true,
  },
  {
    id: 41,
    name: "Bunga Protea",
    description: "Bunga protea yang unik.",
    price: 13000,
    image:
      "https://i.pinimg.com/564x/2c/05/4b/2c054b9e48d3637528e11fd980adba3d.jpg",
    category: "Bunga Protea",
    tags: ["Bunga Protea", "Unik"],
    stock: 30,
    availability: true,
  },
  {
    id: 42,
    name: "Bunga Scabiosa",
    description: "Bunga scabiosa yang lembut.",
    price: 14000,
    image:
      "https://i.pinimg.com/564x/a0/64/da/a064dad80c3e4d97ea87b4e651a194cf.jpg",
    category: "Bunga Scabiosa",
    tags: ["Bunga Scabiosa", "Lembut"],
    stock: 22,
    availability: true,
  },
  {
    id: 43,
    name: "Bunga Solidago",
    description: "Bunga solidago yang cerah.",
    price: 15000,
    image:
      "https://i.pinimg.com/564x/d5/0a/6b/d50a6b86f7939193b23eca7295c96135.jpg",
    category: "Bunga Solidago",
    tags: ["Bunga Solidago", "Cerah"],
    stock: 25,
    availability: true,
  },
  {
    id: 44,
    name: "Bunga Statice",
    description: "Bunga statice yang tahan lama.",
    price: 11000,
    image:
      "https://i.pinimg.com/564x/46/06/40/460640e3605a9645396d1c032900cfef.jpg",
    category: "Bunga Statice",
    tags: ["Bunga Statice", "Tahan Lama"],
    stock: 32,
    availability: true,
  },
  {
    id: 45,
    name: "Bunga Trachelium",
    description: "Bunga trachelium yang elegan.",
    price: 12000,
    image:
      "https://i.pinimg.com/564x/4d/a3/c0/4da3c0fb890e5a64f357d29ba391b22f.jpg",
    category: "Bunga Trachelium",
    tags: ["Bunga Trachelium", "Elegan"],
    stock: 28,
    availability: true,
  },
  {
    id: 46,
    name: "Bunga Tuberose",
    description: "Bunga tuberose yang harum.",
    price: 13000,
    image:
      "https://i.pinimg.com/564x/1a/6b/9c/1a6b9c2b4369538a803b60416b534752.jpg",
    category: "Bunga Tuberose",
    tags: ["Bunga Tuberose", "Harum"],
    stock: 20,
    availability: true,
  },
  {
    id: 47,
    name: "Bunga Wax Begonia",
    description: "Bunga wax begonia yang cantik.",
    price: 14000,
    image:
      "https://i.pinimg.com/564x/19/51/49/1951494f10743e0f41b76bd00879b5bd.jpg",
    category: "Bunga Wax Begonia",
    tags: ["Bunga Wax Begonia", "Cantik"],
    stock: 22,
    availability: true,
  },
  {
    id: 48,
    name: "Bunga Yarrow",
    description: "Bunga yarrow yang menawan.",
    price: 15000,
    image:
      "https://i.pinimg.com/564x/c4/1d/d5/c41dd54b54d37549333807e898495a75.jpg",
    category: "Bunga Yarrow",
    tags: ["Bunga Yarrow", "Menawan"],
    stock: 18,
    availability: true,
  },
  {
    id: 49,
    name: "Bunga Amaryllis",
    description: "Bunga amaryllis yang megah.",
    price: 16000,
    image:
      "https://i.pinimg.com/564x/61/71/b2/6171b230a726b2ff5703c67de6e9b5c9.jpg",
    category: "Bunga Amaryllis",
    tags: ["Bunga Amaryllis", "Megah"],
    stock: 25,
    availability: true,
  },
  {
    id: 50,
    name: "Bunga Astilbe",
    description: "Bunga astilbe yang anggun.",
    price: 17000,
    image:
      "https://i.pinimg.com/564x/ae/2f/e0/ae2fe04f97af7150a199d6d4477342ee.jpg",
    category: "Bunga Astilbe",
    tags: ["Bunga Astilbe", "bagus"],
    stock: 25,
    availability: true,
  },
];

const app = express();

app.use(cors());
app.use(express.json());

const router = express.Router();
app.use("/api", router);

router.get("/florist", (_req, res) => {
  res.json(datas);
});

app.listen(process.env.API_PORT, () =>
  console.log("Server berhasil dijalankan.")
);
