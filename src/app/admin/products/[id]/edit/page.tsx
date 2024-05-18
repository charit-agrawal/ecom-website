import db from "@/db/db"
import { PageHeader } from "../../../_adminComponents/PageHeader"
import { ProductForm } from "../../_components/productForm"

export default async function EditProductPage({
  params: { id },
}: {
  params: { id: string }
}) {
  const product = await db.product.findUnique({ where: { id } })

  return (
    <>
      <PageHeader>Edit Product</PageHeader>
      <ProductForm product={product} />
    </>
  )
}
