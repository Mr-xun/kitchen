import React, { Component } from "react";
import { Carousel } from "antd-mobile";
import "./index.scss";
export default class CarouselWrap extends Component {
    constructor() {
        super();
        this.state = {
            bannerlist: [
                {
                    imageid: "http://pic.ecook.cn/web/260324425.jpg!m720",
                    url: "http://m.ecook.cn/app/download"
                },
                {
                    imageid: "http://pic.ecook.cn/web/263579646.jpg!m720",
                    url: "local://class?id=7136465"
                },
                {
                    imageid: "http://pic.ecook.cn/web/263020556.jpg!m720",
                    url: "local://class?id=7136493"
                },
                {
                    imageid: "http://pic.ecook.cn/web/226891321.jpg!m720",
                    url: "local://class?id=7136535"
                },
                {
                    imageid: "http://pic.ecook.cn/web/258969489.jpg!m720",
                    url: "local://class?id=234457902"
                }
            ]
        };
    }
    render() {
        let { bannerlist } = this.state;
        return (
            <div className="carousel-wrap">
                <Carousel autoplay={true} infinite>
                    {bannerlist.map((item, index) => (
                        <div
                            key={index}
                            style={{
                                display: "inline-block",
                                width: "100%",
                                height: "176"
                            }}
                        >
                            <img
                                src={item.imageid}
                                alt=""
                                style={{
                                    width: "100%",
                                    height: "4rem",
                                    verticalAlign: "top"
                                }}
                                onLoad={() => {
                                    window.dispatchEvent(new Event("resize"));
                                    this.setState({
                                        imgHeight: "auto"
                                    });
                                }}
                            />
                        </div>
                    ))}
                </Carousel>
            </div>
        );
    }
}
