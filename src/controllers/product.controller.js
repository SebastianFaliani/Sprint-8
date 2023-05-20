const { getProducts, getProductById } = require("../services/product.service");
module.exports = {
      getProducts: async (req, res) => {
            try {
                  const products = await getProducts();
                  const productResponse = products.map(({ idProduct, name, description, images, subcategory }) => {
                        return {
                              id: idProduct,
                              name,
                              description,
                              images,
                              subcategory,
                              detail: `/api/products/${idProduct}`,
                        };
                  });
                  function getProductCountByCategory(products) {
                        const categoryCount = {};
                        for (const product of products) {
                              const categoryName = product.subcategory.category.name;
                              if (categoryCount.hasOwnProperty(categoryName)) {
                                    categoryCount[categoryName]++;
                              } else {
                                    categoryCount[categoryName] = 1;
                              }
                        }
                        return categoryCount;
                  }
                  const RESPONSE = {
                        count: products.length,
                        countByCategory: getProductCountByCategory(products),
                        products: productResponse,
                  };

                  return res.status(200).json(RESPONSE);
            } catch (error) {
                  return res.status(500).json({ Error: `Error del Servidor ${error}` });
            }
      },
      getProductById: async (req, res) => {
            try {
                  const ID_PRODUCT = req.params.id;
                  const product = await getProductById(ID_PRODUCT);
                  if (product) {
                        return res.status(200).json(product);
                  } else {
                        return res.status(400).json("Product does not exist");
                  }
            } catch (error) {}
      },
      createProduct: async (req, res) => {},
      deleteProduct: async (req, res) => {},
      updateProduct: async (req, res) => {},
};
