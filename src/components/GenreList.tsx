import React from "react";
import useGenres from "../hooks/useGenres";
import { HStack, Heading, Image, Text } from "@chakra-ui/react";
import getCroppedImageUrl from "../services/Image-url";

const GenreList = () => {
  const { genres, error, loading } = useGenres();
  return (
    <>
      <ul>
        {genres.map((genre) => (
          <HStack>
            <Image
              paddingBlock={1}
              height={10}
              width={10}
              src={getCroppedImageUrl(genre.image_background)}
              alt={genre.name}
            />
            <Text key={genre.id}> {genre.name} </Text>
          </HStack>
        ))}
      </ul>
    </>
  );
};

export default GenreList;
