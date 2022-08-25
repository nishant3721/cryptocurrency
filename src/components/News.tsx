import React from "react";
import moment from "moment";
import { Card, Row, Col, Typography, Avatar } from "antd";

import { useGetCryptoNewsQuery } from "../services/cryptoNewsApi";

const demoImage =
  "https://image.cnbcfm.com/api/v1/image/106928219-1629130755312-gettyimages-1234311531-sindeyev-notitle210729_np12K.jpeg";

const News = () => {
  const { data: cryptoNews, isFetching } = useGetCryptoNewsQuery({
    category: "Cryptocurrency",
  });

  return (
    <>
      <Row gutter={[32, 32]} className="news-card-container">
        {cryptoNews?.value?.map((newsItem: any) => (
          <Col
            xs={24}
            sm={12}
            lg={8}
            className="crypto-news-card"
            key={newsItem.url}
          >
            <Card className="news-card" hoverable>
              <a href={newsItem.url} target="_blank" rel="noreferrer">
                <div className="news-image-container">
                  <Typography.Title className="news-title" level={4}>
                    {newsItem.name}
                  </Typography.Title>
                  <img
                    style={{ maxWidth: "150px", maxHeight: "100px" }}
                    src={newsItem?.image?.thumbnail?.contentUrl || demoImage}
                    alt="news"
                  />
                </div>
                <p>
                  {newsItem.description > 100
                    ? `${newsItem.description.substring(0, 100)}...`
                    : newsItem.description}
                </p>
                <div className="provider-container">
                  <div>
                    <Avatar
                      src={
                        newsItem?.provider[0]?.image?.thumbnail?.contentUrl ||
                        demoImage
                      }
                    />{" "}
                    <Typography.Text>
                      {newsItem.provider[0]?.name}
                    </Typography.Text>
                  </div>
                  <Typography.Text>
                    {moment(newsItem.datePublished)
                      .startOf("seconds")
                      .fromNow()}
                  </Typography.Text>
                </div>
              </a>
            </Card>
          </Col>
        ))}
      </Row>
    </>
  );
};

export default News;
