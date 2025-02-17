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
            name: 'Braceletes',
            imgURL: 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSTYnOUx29RbUu6F8Ev3g2j4JbTnAVfIGI0TQ&s',
            price: ""
        },
        {
            name: 'Braceletes',
            imgURL: 'https://media.istockphoto.com/id/1133525210/photo/pair-of-fancy-golden-designer-earrings-closeup-macro-image-on-red-background.jpg?s=612x612&w=0&k=20&c=ZUknXtyeMhsS9Tdd2nRt8DkOTHc-6tmeG-KdTV_ODLU=',
            price: ""
        },
        {
            name: 'Braceletes',
            imgURL: 'https://images.pexels.com/photos/1413420/pexels-photo-1413420.jpeg?cs=srgb&dl=pexels-ashuphotography-1413420.jpg&fm=jpg',
            price: ""
        }, {
            name: 'Braceletes',
            imgURL: 'https://encrypted-tbn1.gstatic.com/shopping?q=tbn:ANd9GcQzaeKo8KzhfDpguOdoiH1Yrp3LUMLlCWglSWRjuv17FbhLiEda68GOIdHPmgUYnDrSl9LgwhtKG95vLE6A6MU_QDqhSZUQVpzAAyVlFdEySvpzgRSM_yq-9w',
            price: ""
        }
            , {
            name: 'Braceletes',
            imgURL: 'https://encrypted-tbn3.gstatic.com/shopping?q=tbn:ANd9GcRqRPqLAGWRO9fgkZ-Hpvy-N9O0lLmsPchgtqHs7ja0NlE8x73QoQpEujDiUzhDIPo116YQ2MyibR8h7eXUsEO-Y32hCLev7Jw3vFgKoij6nOBoWC_89VvB',
            price: ""
        }, {
            name: 'Braceletes',
            imgURL: 'https://img.freepik.com/free-photo/gold-earrings-with-diamond-top_1340-42891.jpg',
            price: ""
        }, {
            name: 'Braceletes',
            imgURL: 'https://m.media-amazon.com/images/I/81ufe2By8LL._AC_UY1000_.jpg',
            price: ""
        }, {
            name: 'Braceletes',
            imgURL: 'https://www.wamanharipethesons.com/portalrepository/images/product/WHPS3268_0_r.jpg',
            price: ""
        }, {
            name: 'Braceletes',
            imgURL: 'https://thumbs.dreamstime.com/b/earrings-389429.jpg',
            price: ""
        }, {
            name: 'Braceletes',
            imgURL: 'https://i.pinimg.com/originals/13/c4/02/13c402cab8a992fa3050a7b4cf4b9ada.jpg',
            price: ""
        }, {
            name: 'Braceletes',
            imgURL: 'https://i.ebayimg.com/images/g/0C8AAOSwvZNgEdxW/s-l1200.jpg',
            price: ""
        },
        {
            name: 'Braceletes',
            imgURL: 'https://shop.swarna.com/wp-content/uploads/2021/03/MJ3745_1.jpg',
            price: ""
        }
        ],
        Necklace: [{
            name: 'Braceletes',
            imgURL: 'https://i.pinimg.com/474x/c1/3c/10/c13c10d5d9b0f67dec418d528c205d71.jpg',
            price: ""
        },
        {
            name: 'Braceletes',
            imgURL: 'https://i.pinimg.com/736x/cd/ab/3a/cdab3a2b191bb331d3ff284b54e8088d.jpg',
            price: ""
        },
        {
            name: 'Braceletes',
            imgURL: 'https://media.istockphoto.com/id/1163145560/photo/fancy-designer-bracelets-jewelry-for-woman-fashion.jpg?s=612x612&w=0&k=20&c=PcONJpu5bEmvcv5x1OCHV5BmgM9T-K_scye7C8zdH-c=',
            price: ""
        }, {
            name: 'Braceletes',
            imgURL: 'https://t4.ftcdn.net/jpg/01/26/55/57/360_F_126555735_I1iCjWan0jDZz6iPKfVtrdX9mswmnJnw.jpg',
            price: ""
        }
            , {
            name: 'Braceletes',
            imgURL: 'https://png.pngtree.com/thumb_back/fh260/background/20241217/pngtree-turquoise-bracelet-beautiful-stones-jewelry-photography-image_16817593.jpg',
            price: ""
        }, {
            name: 'Braceletes',
            imgURL: 'https://cdn.pixabay.com/photo/2018/11/02/16/50/gold-jewelry-3790542_640.jpg',
            price: ""
        }, {
            name: 'Braceletes',
            imgURL: 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRXyB1KZSWeFhuEoxjM2HhTNNnPzllqlNFcrAkQchb3vlUlxcMBIeuSrT7GQKp9HtIK0as&usqp=CAU',
            price: ""
        }, {
            name: 'Braceletes',
            imgURL: 'https://cdn.joyalukkas.in/media/catalog/product/d/s/dsppg0000553_5.jpg?tr=w-360',
            price: ""
        }, {
            name: 'Braceletes',
            imgURL: 'https://cdn.joyalukkas.in/media/catalog/product/d/s/dsppg0000553_5.jpg?tr=w-360',
            price: ""
        }, {
            name: 'Braceletes',
            imgURL: 'https://cdn.joyalukkas.in/media/catalog/product/d/s/dsppg0000553_5.jpg?tr=w-360',
            price: ""
        }, {
            name: 'Braceletes',
            imgURL: 'https://cdn.joyalukkas.in/media/catalog/product/d/s/dsppg0000553_5.jpg?tr=w-360',
            price: ""
        }
        ],
        Chains: [{
            name: 'Braceletes',
            imgURL: 'https://t4.ftcdn.net/jpg/05/84/41/65/360_F_584416508_eDB9BQA99eNiJg7YOE63WY8tV57jiPI6.jpg',
            price: ""
        },
        {
            name: 'Braceletes',
            imgURL: 'https://i.ebayimg.com/images/g/jhUAAOSw5pdljY80/s-l400.jpg',
            price: ""
        },
        {
            name: 'Braceletes',
            imgURL: 'https://media.istockphoto.com/id/1163145560/photo/fancy-designer-bracelets-jewelry-for-woman-fashion.jpg?s=612x612&w=0&k=20&c=PcONJpu5bEmvcv5x1OCHV5BmgM9T-K_scye7C8zdH-c=',
            price: ""
        }, {
            name: 'Braceletes',
            imgURL: 'https://t4.ftcdn.net/jpg/01/26/55/57/360_F_126555735_I1iCjWan0jDZz6iPKfVtrdX9mswmnJnw.jpg',
            price: ""
        }
            , {
            name: 'Braceletes',
            imgURL: 'https://png.pngtree.com/thumb_back/fh260/background/20241217/pngtree-turquoise-bracelet-beautiful-stones-jewelry-photography-image_16817593.jpg',
            price: ""
        }, {
            name: 'Braceletes',
            imgURL: 'https://cdn.pixabay.com/photo/2018/11/02/16/50/gold-jewelry-3790542_640.jpg',
            price: ""
        }, {
            name: 'Braceletes',
            imgURL: 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRXyB1KZSWeFhuEoxjM2HhTNNnPzllqlNFcrAkQchb3vlUlxcMBIeuSrT7GQKp9HtIK0as&usqp=CAU',
            price: ""
        }, {
            name: 'Braceletes',
            imgURL: 'https://cdn.joyalukkas.in/media/catalog/product/d/s/dsppg0000553_5.jpg?tr=w-360',
            price: ""
        }, {
            name: 'Braceletes',
            imgURL: 'https://cdn.joyalukkas.in/media/catalog/product/d/s/dsppg0000553_5.jpg?tr=w-360',
            price: ""
        }, {
            name: 'Braceletes',
            imgURL: 'https://cdn.joyalukkas.in/media/catalog/product/d/s/dsppg0000553_5.jpg?tr=w-360',
            price: ""
        }, {
            name: 'Braceletes',
            imgURL: 'https://cdn.joyalukkas.in/media/catalog/product/d/s/dsppg0000553_5.jpg?tr=w-360',
            price: ""
        }
        ],
        Braceletes: [{
            name: 'Braceletes',
            imgURL: 'https://t4.ftcdn.net/jpg/05/84/41/65/360_F_584416508_eDB9BQA99eNiJg7YOE63WY8tV57jiPI6.jpg',
            price: ""
        },
        {
            name: 'Braceletes',
            imgURL: 'https://i.ebayimg.com/images/g/jhUAAOSw5pdljY80/s-l400.jpg',
            price: ""
        },
        {
            name: 'Braceletes',
            imgURL: 'https://media.istockphoto.com/id/1163145560/photo/fancy-designer-bracelets-jewelry-for-woman-fashion.jpg?s=612x612&w=0&k=20&c=PcONJpu5bEmvcv5x1OCHV5BmgM9T-K_scye7C8zdH-c=',
            price: ""
        }, {
            name: 'Braceletes',
            imgURL: 'https://t4.ftcdn.net/jpg/01/26/55/57/360_F_126555735_I1iCjWan0jDZz6iPKfVtrdX9mswmnJnw.jpg',
            price: ""
        }
            , {
            name: 'Braceletes',
            imgURL: 'https://png.pngtree.com/thumb_back/fh260/background/20241217/pngtree-turquoise-bracelet-beautiful-stones-jewelry-photography-image_16817593.jpg',
            price: ""
        }, {
            name: 'Braceletes',
            imgURL: 'https://cdn.pixabay.com/photo/2018/11/02/16/50/gold-jewelry-3790542_640.jpg',
            price: ""
        }, {
            name: 'Braceletes',
            imgURL: 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRXyB1KZSWeFhuEoxjM2HhTNNnPzllqlNFcrAkQchb3vlUlxcMBIeuSrT7GQKp9HtIK0as&usqp=CAU',
            price: ""
        }, {
            name: 'Braceletes',
            imgURL: 'https://png.pngtree.com/thumb_back/fh260/background/20220314/pngtree-jewelry-bracelet-buddha-bead-bracelet-obsidian-image_1050891.jpg',
            price: ""
        }, {
            name: 'Braceletes',
            imgURL: 'https://img.lovepik.com/photo/48014/0663.jpg_wh860.jpg',
            price: ""
        }, {
            name: 'Braceletes',
            imgURL: 'https://assets.ajio.com/medias/sys_master/root/20230624/Idi9/64964c63eebac147fceecf60/-473Wx593H-465276060-rosegold-MODEL.jpg',
            price: ""
        }, {
            name: 'Braceletes',
            imgURL: 'https://assets.ajio.com/medias/sys_master/root/20231018/6SJI/652f09e4ddf779151944f661/-473Wx593H-466703961-rosegold-MODEL2.jpg',
            price: ""
        }, {
            name: 'Braceletes',
            imgURL: 'https://preciousjewelleryblog.wordpress.com/wp-content/uploads/2016/03/gold-bracelets-tanishq-hd-images-for-tanishq-jewellery-bangles-designs-catalogue-with-price.jpg',
            price: ""
        }
        ],
        GoldCoins: [{
            name: 'Braceletes',
            imgURL: 'https://t4.ftcdn.net/jpg/05/84/41/65/360_F_584416508_eDB9BQA99eNiJg7YOE63WY8tV57jiPI6.jpg',
            price: ""
        },
        {
            name: 'Braceletes',
            imgURL: 'https://i.ebayimg.com/images/g/jhUAAOSw5pdljY80/s-l400.jpg',
            price: ""
        },
        {
            name: 'Braceletes',
            imgURL: 'https://media.istockphoto.com/id/1163145560/photo/fancy-designer-bracelets-jewelry-for-woman-fashion.jpg?s=612x612&w=0&k=20&c=PcONJpu5bEmvcv5x1OCHV5BmgM9T-K_scye7C8zdH-c=',
            price: ""
        }, {
            name: 'Braceletes',
            imgURL: 'https://t4.ftcdn.net/jpg/01/26/55/57/360_F_126555735_I1iCjWan0jDZz6iPKfVtrdX9mswmnJnw.jpg',
            price: ""
        }
            , {
            name: 'Braceletes',
            imgURL: 'https://png.pngtree.com/thumb_back/fh260/background/20241217/pngtree-turquoise-bracelet-beautiful-stones-jewelry-photography-image_16817593.jpg',
            price: ""
        }, {
            name: 'Braceletes',
            imgURL: 'https://cdn.pixabay.com/photo/2018/11/02/16/50/gold-jewelry-3790542_640.jpg',
            price: ""
        }, {
            name: 'Braceletes',
            imgURL: 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRXyB1KZSWeFhuEoxjM2HhTNNnPzllqlNFcrAkQchb3vlUlxcMBIeuSrT7GQKp9HtIK0as&usqp=CAU',
            price: ""
        }, {
            name: 'Braceletes',
            imgURL: 'https://cdn.joyalukkas.in/media/catalog/product/d/s/dsppg0000553_5.jpg?tr=w-360',
            price: ""
        }, {
            name: 'Braceletes',
            imgURL: 'https://cdn.joyalukkas.in/media/catalog/product/d/s/dsppg0000553_5.jpg?tr=w-360',
            price: ""
        }, {
            name: 'Braceletes',
            imgURL: 'https://cdn.joyalukkas.in/media/catalog/product/d/s/dsppg0000553_5.jpg?tr=w-360',
            price: ""
        }, {
            name: 'Braceletes',
            imgURL: 'https://cdn.joyalukkas.in/media/catalog/product/d/s/dsppg0000553_5.jpg?tr=w-360',
            price: ""
        }
        ],
    }
]

export default data