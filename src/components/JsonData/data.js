const data = [
    {
        people: [{
            id: 1,
            image:
                'https://res.cloudinary.com/diqqf3eq2/image/upload/v1595959131/person-2_ipcjws.jpg',
            name: 'maria ferguson',
            title: 'office manager',
            quote:
                'Fingerstache umami squid, kinfolk subway tile selvage tumblr man braid viral kombucha gentrify fanny pack raclette pok pok mustache.',
        },
        {
            id: 2,
            image:
                'https://res.cloudinary.com/diqqf3eq2/image/upload/v1586883417/person-3_ipa0mj.jpg',
            name: 'john doe',
            title: 'regular guy',
            quote:
                'Gastropub sustainable tousled prism occupy. Viral XOXO roof party brunch actually, chambray listicle microdosing put a bird on it paleo subway tile squid umami.',
        },
        {
            id: 3,
            image:
                'https://res.cloudinary.com/diqqf3eq2/image/upload/v1595959121/person-1_aufeoq.jpg',
            name: 'peter smith',
            title: 'product designer',
            quote:
                'Drinking vinegar polaroid street art echo park, actually semiotics next level butcher master cleanse hammock flexitarian ethical paleo.',
        },
        {
            id: 4,
            image:
                'https://res.cloudinary.com/diqqf3eq2/image/upload/v1586883334/person-1_rfzshl.jpg',
            name: 'susan andersen',
            title: 'the boss',
            quote:
                'Marfa af yr 3 wolf moon kogi, readymade distillery asymmetrical seitan kale chips fingerstache cloud bread mustache twee messenger bag. ',
        }],

        Earings: [{
            name: 'Earings',
            imgURL: 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSTYnOUx29RbUu6F8Ev3g2j4JbTnAVfIGI0TQ&s',
            price: "40,233"
        },
        {
            name: 'Earings',
            imgURL: 'https://media.istockphoto.com/id/1133525210/photo/pair-of-fancy-golden-designer-earrings-closeup-macro-image-on-red-background.jpg?s=612x612&w=0&k=20&c=ZUknXtyeMhsS9Tdd2nRt8DkOTHc-6tmeG-KdTV_ODLU=',
            price: "40,876"
        },
        {
            name: 'Earings',
            imgURL: 'https://images.pexels.com/photos/1413420/pexels-photo-1413420.jpeg?cs=srgb&dl=pexels-ashuphotography-1413420.jpg&fm=jpg',
            price: "30,133"
        }, {
            name: 'Earings',
            imgURL: 'https://encrypted-tbn1.gstatic.com/shopping?q=tbn:ANd9GcQzaeKo8KzhfDpguOdoiH1Yrp3LUMLlCWglSWRjuv17FbhLiEda68GOIdHPmgUYnDrSl9LgwhtKG95vLE6A6MU_QDqhSZUQVpzAAyVlFdEySvpzgRSM_yq-9w',
            price: "40,236"
        }
            , {
            name: 'Earings',
            imgURL: 'https://encrypted-tbn3.gstatic.com/shopping?q=tbn:ANd9GcRqRPqLAGWRO9fgkZ-Hpvy-N9O0lLmsPchgtqHs7ja0NlE8x73QoQpEujDiUzhDIPo116YQ2MyibR8h7eXUsEO-Y32hCLev7Jw3vFgKoij6nOBoWC_89VvB',
            price: "20,233"
        }, {
            name: 'Earings',
            imgURL: 'https://img.freepik.com/free-photo/gold-earrings-with-diamond-top_1340-42891.jpg',
            price: "50,233"
        }, {
            name: 'Earings',
            imgURL: 'https://m.media-amazon.com/images/I/81ufe2By8LL._AC_UY1000_.jpg',
            price: "40,433"
        }, {
            name: 'Earings',
            imgURL: 'https://www.wamanharipethesons.com/portalrepository/images/product/WHPS3268_0_r.jpg',
            price: "80,755"
        }, {
            name: 'Earings',
            imgURL: 'https://thumbs.dreamstime.com/b/earrings-389429.jpg',
            price: "40,678"
        }, {
            name: 'Earings',
            imgURL: 'https://i.pinimg.com/originals/13/c4/02/13c402cab8a992fa3050a7b4cf4b9ada.jpg',
            price: "33,675"
        }, {
            name: 'Earings',
            imgURL: 'https://i.ebayimg.com/images/g/0C8AAOSwvZNgEdxW/s-l1200.jpg',
            price: "56,879"
        },
        {
            name: 'Earings',
            imgURL: 'https://shop.swarna.com/wp-content/uploads/2021/03/MJ3745_1.jpg',
            price: "45,900"
        }
        ],
        Necklace: [{
            name: 'Necklace',
            imgURL: 'https://i.pinimg.com/474x/c1/3c/10/c13c10d5d9b0f67dec418d528c205d71.jpg',
            price: "67,987"
        },
        {
            name: 'Necklace',
            imgURL: 'https://i.pinimg.com/736x/cd/ab/3a/cdab3a2b191bb331d3ff284b54e8088d.jpg',
            price: "56,765"
        },
        {
            name: 'Necklace',
            imgURL: 'https://wallpapers.com/images/hd/gold-necklace-design-kjrjc693y5rbpnnb.jpg',
            price: "34,323"
        }, {
            name: 'Necklace',
            imgURL: 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRfJQWN0THd1nLVhdkwwVMcvRJEUlu0hWhkTQ&s',
            price: "90,678"
        }
            , {
            name: 'Necklace',
            imgURL: 'https://navrathan.com/wp-content/uploads/2023/12/NJJ-2424323.jpg',
            price: "32,897"
        }, {
            name: 'Necklace',
            imgURL: 'https://5.imimg.com/data5/SELLER/Default/2023/3/296885145/DO/CY/AL/152673053/gold-necklace-jewellery-500x500.png',
            price: "78,232"
        }, {
            name: 'Necklace',
            imgURL: 'https://5.imimg.com/data5/MW/WK/MY-45535521/gold-plated-necklace-set.jpg',
            price: "67,2726"
        }, {
            name: 'Necklace',
            imgURL: 'https://c1.wallpaperflare.com/preview/254/983/734/gold-chain-chain-jewellery-gold.jpg',
            price: "56,765"
        }, {
            name: 'Necklace',
            imgURL: 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRf4CbiB6IYaFMi6-pDEkbLAPii8H0jwTes3g&s',
            price: "20,398"
        }, {
            name: 'Necklace',
            imgURL: 'https://assets.ajio.com/medias/sys_master/root/20220713/Oe4T/62cdbf9faeb26921af7692bb/-1117Wx1400H-460813634-gold-MODEL.jpg',
            price: "78,302"
        }, {
            name: 'Necklace',
            imgURL: 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRnMLA87yAlkyWvgLYublxmFWkIiiJWgZh7yw&s',
            price: "27,309"
        }, {
            name: 'Necklace',
            imgURL: 'https://thumbs.dreamstime.com/b/beautiful-indian-traditional-gold-necklace-gemstones-jewel-box-indian-traditional-gold-necklace-gemstones-130346540.jpg',
            price: "398,309"
        }
        ],
        Chains: [{
            name: 'Chains',
            imgURL: 'https://t4.ftcdn.net/jpg/05/32/82/23/360_F_532822388_FG1byOJ42sWgG6gMJqW8b7fbron08Czz.jpg',
            price: "36,398"
        },
        {
            name: 'Chains',
            imgURL: 'https://rukminim2.flixcart.com/image/850/1000/l4n2oi80/necklace-chain/j/d/a/1-ring-chain-2-chain-happy-jewellery-original-imagfhrh6agemmyh.jpeg?q=90&crop=false',
            price: "100,209"
        },
        {
            name: 'Chains',
            imgURL: 'https://www.onlinepng.com/cdn/shop/files/CH-928042-1.jpg?v=1719397198&width=1200',
            price: "26,387"
        }, {
            name: 'Chains',
            imgURL: 'https://www.bhindi.com/upload/product/hmc-1038.webp',
            price: "37,298"
        }
            , {
            name: 'Chains',
            imgURL: 'https://wallpapers.com/images/hd/gold-chain-gu1nwj0iqa4e2y7o.jpg',
            price: "109,287"
        }, {
            name: 'Chains',
            imgURL: 'https://media.istockphoto.com/id/1276740597/photo/indian-traditional-gold-necklace.jpg?s=612x612&w=0&k=20&c=OYp1k0OVJObYq9hqVK_r6NwYa_W54km4nya1R-ovIUY=',
            price: "27,387"
        }, {
            name: 'Chains',
            imgURL: 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRXyB1KZSWeFhuEoxjM2HhTNNnPzllqlNFcrAkQchb3vlUlxcMBIeuSrT7GQKp9HtIK0as&usqp=CAU',
            price: "56,344"
        }, {
            name: 'Chains',
            imgURL: 'https://www.kalyanjewellers.net/images/Jewellery/Gold/images/BAVISHNI-SANKALP-GOLD-CHAIN.jpg',
            price: "67,387"
        }, {
            name: 'Chains',
            imgURL: 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQGQMW9fVaLS9NYCrtyzr-vLnkaiYfQj5HRRA&s',
            price: "77,376"
        }, {
            name: 'Chains',
            imgURL: 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTbXNZdfWbJlSwBh-sFD3jDfbWw9o4CTHDi4w&s',
            price: "42,287"
        }, {
            name: 'Chains',
            imgURL: 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTbXNZdfWbJlSwBh-sFD3jDfbWw9o4CTHDi4w&s',
            price: "78,378"
        }, {
            name: 'Chains',
            imgURL: 'https://tribalornaments.com/cdn/shop/products/il_fullxfull.1693384446_kde8.jpg?v=1616689378&width=1946',
            price: "45,748"
        }
        ],
        Braceletes: [{
            name: 'Braceletes',
            imgURL: 'https://t4.ftcdn.net/jpg/05/84/41/65/360_F_584416508_eDB9BQA99eNiJg7YOE63WY8tV57jiPI6.jpg',
            price: "928,272"
        },
        {
            name: 'Braceletes',
            imgURL: 'https://i.ebayimg.com/images/g/jhUAAOSw5pdljY80/s-l400.jpg',
            price: "78,2837"
        },
        {
            name: 'Braceletes',
            imgURL: 'https://media.istockphoto.com/id/1163145560/photo/fancy-designer-bracelets-jewelry-for-woman-fashion.jpg?s=612x612&w=0&k=20&c=PcONJpu5bEmvcv5x1OCHV5BmgM9T-K_scye7C8zdH-c=',
            price: "67,376"
        }, {
            name: 'Braceletes',
            imgURL: 'https://t4.ftcdn.net/jpg/01/26/55/57/360_F_126555735_I1iCjWan0jDZz6iPKfVtrdX9mswmnJnw.jpg',
            price: "187,392"
        }
            , {
            name: 'Braceletes',
            imgURL: 'https://png.pngtree.com/thumb_back/fh260/background/20241217/pngtree-turquoise-bracelet-beautiful-stones-jewelry-photography-image_16817593.jpg',
            price: "37,3837"
        }, {
            name: 'Braceletes',
            imgURL: 'https://cdn.pixabay.com/photo/2018/11/02/16/50/gold-jewelry-3790542_640.jpg',
            price: "37,3736"
        }, {
            name: 'Braceletes',
            imgURL: 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRXyB1KZSWeFhuEoxjM2HhTNNnPzllqlNFcrAkQchb3vlUlxcMBIeuSrT7GQKp9HtIK0as&usqp=CAU',
            price: "67,373"
        }, {
            name: 'Braceletes',
            imgURL: 'https://png.pngtree.com/thumb_back/fh260/background/20220314/pngtree-jewelry-bracelet-buddha-bead-bracelet-obsidian-image_1050891.jpg',
            price: "56,365"
        }, {
            name: 'Braceletes',
            imgURL: 'https://img.lovepik.com/photo/48014/0663.jpg_wh860.jpg',
            price: "89,376"
        }, {
            name: 'Braceletes',
            imgURL: 'https://assets.ajio.com/medias/sys_master/root/20230624/Idi9/64964c63eebac147fceecf60/-473Wx593H-465276060-rosegold-MODEL.jpg',
            price: "65,3736"
        }, {
            name: 'Braceletes',
            imgURL: 'https://assets.ajio.com/medias/sys_master/root/20231018/6SJI/652f09e4ddf779151944f661/-473Wx593H-466703961-rosegold-MODEL2.jpg',
            price: "45,367"
        }, {
            name: 'Braceletes',
            imgURL: 'https://preciousjewelleryblog.wordpress.com/wp-content/uploads/2016/03/gold-bracelets-tanishq-hd-images-for-tanishq-jewellery-bangles-designs-catalogue-with-price.jpg',
            price: "35,463"
        }
        ],
        GoldCoins: [{
            name: 'GoldCoins',
            imgURL: 'https://www.wowshop.com.my/media/catalog/product/1/6/1642345400657.jpg?optimize=high&bg-color=255,255,255&fit=bounds&height=485&width=485&canvas=485:485',
            price: "78,363"
        },
        {
            name: 'GoldCoins',
            imgURL: 'https://images.pexels.com/photos/6765372/pexels-photo-6765372.jpeg',
            price: "12,909"
        },
        {
            name: 'GoldCoins',
            imgURL: 'https://sreethangamjewellery.com/stjt/wp-content/uploads/2022/11/Round_GajaLaxmi.jpg',
            price: "33,376"
        }, {
            name: 'GoldCoins',
            imgURL: 'https://wallpapercat.com/w/full/a/4/5/1216336-1920x1080-desktop-1080p-gold-coins-wallpaper-photo.jpg',
            price: "22,387"
        }
            , {
            name: 'GoldCoins',
            imgURL: 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcS__-gLC8ts9Byjxtm9WmcMK0g1Uh2z1ECVt0_MeE43_zVaM65B_xXxsUUlVk6dl0O_24Q&usqp=CAU',
            price: "23,363"
        }, {
            name: 'GoldCoins',
            imgURL: 'https://img.freepik.com/premium-photo/stack-gold-coins_81048-29255.jpg',
            price: "47,383"
        }, {
            name: 'GoldCoins',
            imgURL: 'https://static.vecteezy.com/system/resources/thumbnails/049/507/625/small/a-truly-magnificent-display-featuring-a-grand-assortment-of-gold-tokens-meticulously-stacked-amongst-a-dazzling-array-of-shimmering-treasures-all-exuding-an-immense-sense-of-wealth-and-opulence-photo.jpg',
            price: "23,736"
        }, {
            name: 'GoldCoins',
            imgURL: 'https://m.media-amazon.com/images/I/51rpXubFVSL._AC_UY1100_.jpg',
            price: "56,365"
        }, {
            name: 'GoldCoins',
            imgURL: 'https://images.goodreturns.in/img/2020/10/goldcoins-1602171501.jpg',
            price: "23,736"
        }, {
            name: 'GoldCoins',
            imgURL: 'https://img.freepik.com/premium-photo/gold-coins-gold-jewellery-floor-background_181203-24090.jpg',
            price: "65,3736"
        }, {
            name: 'GoldCoins',
            imgURL: 'https://5.imimg.com/data5/SELLER/Default/2020/8/SI/YI/CZ/112137581/atjewel-10-gram-999-gol-500x500.jpg',
            price: "45,376"
        },{
            name: 'GoldCoins',
            imgURL: 'https://princejewellery.com/storage/product/889/8Grm-Coin-Details-(7).jpg',
            price: "76,373"
        }
        ],
    }
]

export default data