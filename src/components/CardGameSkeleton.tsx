import { Skeleton, Card, CardBody, SkeletonText } from "@chakra-ui/react";

const CardGameSkeleton = () => {
  return (
    <Card>
      <Skeleton height="200px" />
      <CardBody>
        <SkeletonText />
      </CardBody>
    </Card>
  );
};

export default CardGameSkeleton;
