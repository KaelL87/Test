import { Card, Grid, Text } from '@nextui-org/react';
import notfound from 'src/assets/notfound.jpg';
import React from 'react';
import { IMovie } from 'src/types';

const CardDetails: React.FC<{ item: IMovie }> = ({ item }) => {
  return (
    <Card css={{ w: '50%', h: 'auto', margin: '0 auto' }}>
      <Card.Body css={{ p: '20px' }}>
        <Grid.Container xs={12} gap={1}>
          <Grid xs={12} sm={6}>
            <Card.Image
              src={
                item.poster_path !== null
                  ? 'https://image.tmdb.org/t/p/w185_and_h278_bestv2' + item.poster_path
                  : notfound
              }
              objectFit="cover"
              width="100%"
              height="100%"
              alt="Relaxing app background"
            />
          </Grid>
          <Grid.Container xs={12} sm={6}>
            <Grid xs={12}>
              <Text b h4>
                {item.original_title}
              </Text>
            </Grid>
            <Grid xs={12} css={{ display: 'block !important' }}>
              <Text h4>Overview:</Text>
              <Text h4>{item.overview}</Text>
            </Grid>
            <Grid xs={12}>
              <Text h4>Popularity: {item.popularity}</Text>
            </Grid>
            <Grid xs={12}>
              <Text h4>Votes: {item.vote_count}</Text>
            </Grid>
          </Grid.Container>
        </Grid.Container>
      </Card.Body>
    </Card>
  );
};

export default CardDetails;
