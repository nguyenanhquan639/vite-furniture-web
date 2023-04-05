import { nanoid } from "nanoid";

export default function data() {
    return {
        categories: [
            {
                id: nanoid(),
                icon: "./icons/chairs.png",
                title: "Chairs"
            },
            {
                id: nanoid(),
                icon: "./icons/tables.png",
                title: "Tables"
            },
            {
                id: nanoid(),
                icon: "./icons/wardrobes.png",
                title: "Wardrobes"
            },
            {
                id: nanoid(),
                icon: "./icons/cabinets.png",
                title: "Cabinets"
            },
            {
                id: nanoid(),
                icon: "./icons/lamps.png",
                title: "Lamps"
            },
            {
                id: nanoid(),
                icon: "./icons/clothes.png",
                title: "Clothes Rails"
            },
            {
                id: nanoid(),
                icon: "./icons/bookshelfs.png",
                title: "Bookshelfs"
            },
            {
                id: nanoid(),
                icon: "./icons/beds.png",
                title: "Beds"
            },
        ],
        trending: [
            {
                id: nanoid(),
                img: "./images/trending/odie.png",
                type: "Bedside Table",
                title: "Odie",
                price: 400,
                amount: "1000"
            },
            {
                id: nanoid(),
                img: "./images/trending/kolton.png",
                type: "Chair",
                title: "Kolton",
                price: 895,
                amount: "500"
            },
            {
                id: nanoid(),
                img: "./images/trending/klemet.png",
                type: "Table",
                title: "Klemet",
                price: 400,
                amount: "850"
            },
            {
                id: nanoid(),
                img: "./images/trending/wingrove.png",
                type: "Table",
                title: "Wingrove",
                price: 775,
                amount: "1000"
            },
        ],
        bestdeal: [
            {
                id: nanoid(),
                img: "./images/bestDeal/elvi.png",
                type: "Chair",
                title: "Elvi",
                cost: 500,
                discount: 0.2,
                amount: "1000"
            },
            {
                id: nanoid(),
                img: "./images/bestDeal/ankhara.png",
                type: "Dressing Table",
                title: "Ankhara",
                cost: 800,
                discount: 0.5,
                amount: "500"
            },
            {
                id: nanoid(),
                img: "./images/bestDeal/pavia.png",
                type: "Bedside Table",
                title: "Klemet",
                cost: 900,
                discount: 0.5,
                amount: "850"
            },
            {
                id: nanoid(),
                img: "./images/bestDeal/maxine.png",
                type: "Bookshelf",
                title: "Maxine",
                cost: 300,
                discount:0.5,
                amount: "1000"
            },
        ],
        discover: [
            {
                id: nanoid(),
                img:"./images/discover/cooking.png",
                title: "Make your cooking activity more fun with good setup",
                date: "31 July 2022"
            },
            {
                id: nanoid(),
                img:"./images/discover/furniture.png",
                title: "Stunning furniture with aesthetic appeal",
                date: "31 July 2022"
            },
            {
                id: nanoid(),
                img:"./images/discover/working.png",
                title: "Solution for clean look working space",
                date: "31 July 2022"
            }
        ]
    }
} 