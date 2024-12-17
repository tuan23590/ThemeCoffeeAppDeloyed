import { Suspense } from "react";
import { Box, Header, Page, Tabs, Text } from "zmp-ui";
import ProductItem from "../components/product/item";
import { mergeData } from "../hooks/hooks";
import { useCategories } from "../store/categories";
import { useProducts } from "../store/productStore";
import { useVariants } from "../store/variantStore";
import React from "react";

const CategoryPicker = () => {
  const [selectedCategory] = useCategories.selectedCategory();
  const [categories] = useCategories.categories();
  
  return (
    <Tabs
      scrollable
      defaultActiveKey={selectedCategory}
      className="category-tabs"
    >
      {categories.map((category) => (
        <Tabs.Tab key={category.id} label={category.name}>
          <Suspense>
            <CategoryProducts categoryId={category.id} />
          </Suspense>
        </Tabs.Tab>
      ))}
    </Tabs>
  );
};

const CategoryProducts = ({ categoryId }) => {

  const [products] = useProducts.products();
  const [variants] = useVariants.variants();
  const productsByCate = products.filter((product) =>
        product.categoryId.includes(categoryId)
      );

  const productsByCategory = mergeData(productsByCate, variants);

  if (productsByCate.length === 0) {
    return (
      <Box className="flex-1 bg-background p-4 flex justify-center items-center">
        <Text size="xSmall" className="text-gray">
          Không có sản phẩm trong danh mục
        </Text>
      </Box>
    );
  }
  return (
    <Box className="bg-background grid grid-cols-2 gap-4 p-4">
      {productsByCategory.map((product) => (
        <ProductItem key={product.id} product={product} />
      ))}
    </Box>
  );
};

const CategoryPage = () => {
  return (
    <Page className="flex flex-col">
      <Header title="Danh mục" />
      <CategoryPicker />
    </Page>
  );
};

export default CategoryPage;
