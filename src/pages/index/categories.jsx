import { Box, Text } from "zmp-ui";
import { useNavigate } from "react-router";
import { useCategories } from "../../store/categories";
import React from "react";

const Categories = () => {
  const [categories] = useCategories.categories();
  const navigate = useNavigate();
  const [selectCategoryId, setSelectedCategoryId] = useCategories.selectedCategory();

  console.log(categories);
  console.log(selectCategoryId);

  const gotoCategory = (categoryId) => {
    setSelectedCategoryId(categoryId);
    navigate("/category");
  };

  return (
    <Box className="bg-white grid grid-cols-4 gap-4 p-4">
      {categories.map((category, i) => (
        <div

          // check: key={i}

          key={i}
          onClick={() => gotoCategory(category.id)}
          className="flex flex-col space-y-2 items-center"
        >
          <img className="w-12 h-12" src={category.icon} alt={category.name} />
          <Text size="xxSmall" className="text-gray">
            {category.name}
          </Text>
        </div>
      ))}
    </Box>
  );
};

export default Categories;
