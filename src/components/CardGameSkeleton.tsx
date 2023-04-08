import { Skeleton, Card, CardBody, SkeletonText } from "@chakra-ui/react";

const CardGameSkeleton = () => {
  return (
    <Card width="300px" rounded="10px" overflow="hidden">
      <Skeleton height="200px" />
      <CardBody>
        <SkeletonText />
      </CardBody>
    </Card>
  );
};

export default CardGameSkeleton;
