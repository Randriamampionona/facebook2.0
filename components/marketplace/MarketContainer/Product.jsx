import Image from "next/image";
import React from "react";

const Product = ({ product }) => {
	return (
		<div className="flex flex-col gap-y-2">
			<div className="relative w-full h-[15.5rem] overflow-hidden rounded">
				<Image
					src={product.img}
					alt={product.name}
					layout="fill"
					objectFit="cover"
				/>
			</div>
			<div>
				<h1 className="text-base font-semibold leading-tight">
					Ar{product.price}
				</h1>
				<p className="text-sm leading-tight">{product.name}</p>
				<span className="text-textLight text-xs leading-tight">
					{product.location}
				</span>
			</div>
		</div>
	);
};

export default Product;
