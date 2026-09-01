import React from "react";
import { Section } from "../../clients/editItems/Style";
import { useRouter } from "next/router";

import { useForm, SubmitHandler } from "react-hook-form";

import { SubmitButton } from "@components/List/SubmitButton";
import { useAddProduct } from "@apolloo/actions/products";

interface Img {
  img: string;
}

const AddProduct = ({}) => {
  const router = useRouter();

  type Inputs = {
    productName: String;
    blogSubTitle: String;
  };

  const [add, { data: data2, error: err2, loading: loading3 }] =
    useAddProduct();
  const {
    register,
    handleSubmit,
    watch,
    formState: { errors },
  } = useForm<Inputs>();

  const onSubmit: SubmitHandler<Inputs> = (data) => {
    const set = {
      ...data,
    };
    add({ variables: set });
  };

  if (data2 && data2.addProduct) {
    router.push(`/products/${data2.addProduct.id}`);
  }
  return (
    <Section onSubmit={handleSubmit(onSubmit)}>
      <SubmitButton set text={"Add"} loading={loading3} />
      <div data-aos="fade-left" id="myModal" className="modal">
        <div className="modal-content">
          <div className="form">
            <div className="box">
              <div className="head">
                <h2>Add Product</h2>
              </div>

              <div className="input-field">
                <label>Name</label>
                <input
                  id={errors.productName ? "active" : ""}
                  {...register("productName", { required: true })}
                  placeholder="Add Product Name"
                />
              </div>
            </div>
          </div>
        </div>
      </div>
    </Section>
  );
};

export default AddProduct;
