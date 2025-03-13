import { notFound } from "next/navigation";
export default async function ProductReview({
    params,
}: {
params: Promise<{productId: string; reviewId: string}>;
}){
    const {productId, reviewsId} = await params;
    console.log('reviewId is :',reviewsId);
    if(parseInt(reviewsId > 1000)){
        notFound();
    }
    return(
        <h1>Review {reviewsId}  for product {productId}</h1>
    )
}