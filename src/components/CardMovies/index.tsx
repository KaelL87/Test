import { Button, Card, Col, Row, Text } from '@nextui-org/react';
import { useNavigate } from 'react-router-dom';
import notfound from 'src/assets/notfound.jpg';
import React from 'react';
import { IMovie } from 'src/types';

const CardMovies: React.FC<{ item: IMovie }> = ({ item }) => {
  const navigate = useNavigate();
  return (
    <Card css={{ w: '100%', h: '400px' }}>
      <Card.Header css={{ position: 'absolute', zIndex: 1, top: 5 }}>
        <Col>
          <Text h3 color="cyan"></Text>
        </Col>
      </Card.Header>
      <Card.Body css={{ p: 0 }}>
        <Card.Image
          src={
            item.poster_path !== null
              ? 'https://image.tmdb.org/t/p/w185_and_h278_bestv2' + item.poster_path
              : notfound
          }
          width="100%"
          height="100%"
          objectFit="cover"
          alt="Card movie"
        />
      </Card.Body>
      <Card.Footer
        css={{
          position: 'absolute',
          bgBlur: '#ffffff66',
          borderTop: '$borderWeights$light solid rgba(255, 255, 255, 0.2)',
          bottom: 0,
          zIndex: 1,
        }}
      >
        <Row>
          <Col>
            <Text color="#0ca2cf" b size={13}>
              {item.title}
            </Text>
          </Col>
          <Col>
            <Row justify="flex-end">
              <Button
                flat
                auto
                rounded
                color="secondary"
                onClick={() => navigate(`/details:${item.id}`)}
              >
                <Text css={{ color: 'inherit' }} size={12} weight="bold" transform="uppercase">
                  Detalles
                </Text>
              </Button>
            </Row>
          </Col>
        </Row>
      </Card.Footer>
    </Card>
  );
};

export default CardMovies;
