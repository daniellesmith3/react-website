import useGenres from "../hooks/useGenres";
import { HStack, Heading, Image, List, ListItem, Text } from "@chakra-ui/react";
import getCroppedImageUrl from "../services/Image-url";
import { Spinner } from "@chakra-ui/react";

const GenreList = () => {
  const { data: genres, error, loading } = useGenres();
  if (loading) return <Spinner size="xl"></Spinner>;
  if (error) return null;
  return (
    <>
      <List>
        {genres.map((genre) => (
          <ListItem paddingY="5px">
            <HStack key={genre.id}>
              <Image
                key={genre.name}
                paddingBlock={1}
                borderRadius={8}
                boxSize="42px"
                src={getCroppedImageUrl(genre.image_background)}
                alt={genre.name}
              />
              <Text fontSize="lg" key={genre.id}>
                {" "}
                {genre.name}{" "}
              </Text>
            </HStack>
          </ListItem>
        ))}
      </List>
    </>
  );
};

export default GenreList;
