import { useQuery, gql, useMutation, useLazyQuery } from "@apollo/react-hooks";

import {
  ADD_PRODUCT,
  EDIT_PRODUCT,
  GET_ALL_PRODUCT,
  GET_PRODUCT_BY_ID,
} from "@apolloo/queries/product";

export const getAllProduct = () => useQuery(GET_ALL_PRODUCT, {});

export const getProductById = (options: any) =>
  useQuery(GET_PRODUCT_BY_ID, options);
export const useAddProduct = () =>
  useMutation(ADD_PRODUCT, {
    update(cache, { data: { addProduct } }) {
      const { getAllProduct }: any = cache.readQuery({
        query: GET_ALL_PRODUCT,
      });

      try {
        const data = [...getAllProduct, addProduct];

        cache.writeQuery({
          query: GET_ALL_PRODUCT,
          data: { getAllProduct: [...data] },
        });
      } catch (err) {
        console.log(err);
      }
    },
  });

export const useEditProduct = () =>
  useMutation(EDIT_PRODUCT, {
    update(cache, { data: { editProduct } }) {
      const { getAllProduct }: any = cache.readQuery({
        query: GET_ALL_PRODUCT,
      });

      try {
        if (getAllProduct) {
          const arr = getAllProduct;

          const objIndex = getAllProduct.findIndex(
            (set) => set.id === editProduct.id
          );
          arr[objIndex] = editProduct;

          // const {getAllAmbassadors}:any = cache.readQuery({query:GET_ALL_AMASS})

          cache.writeQuery({
            query: GET_ALL_PRODUCT,
            data: { getAllProduct: [...arr] },
          });
          // const data = [...getAllProduct, addServices];

          // cache.writeQuery({
          //   query: GET_ALL_PRODUCT,
          //   data: { getAllProduct: [...data] },
          // });
        }

        // toast.success(`${addServices.memberName} add to team `);
      } catch (err) {
        console.log(err);
      }
    },
  });
