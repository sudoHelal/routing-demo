export default async function ProductDetails({
    params,
  }: {
    params: Promise<{ productId: string }>;
  }) {
    const resolvedParams = await params;
    console.log("Resolved params:", resolvedParams); // Log the entire params object
    const productId = resolvedParams.productId;
    console.log("product id is", productId);
    return <h1>Details about product {productId}</h1>;
  }