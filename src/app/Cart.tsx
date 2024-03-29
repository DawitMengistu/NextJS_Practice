"use client"

import { buttonVariants } from "@/components/ui/button";
import { Sheet, SheetContent, SheetFooter, SheetHeader, SheetTitle, SheetTrigger } from "@/components/ui/sheet";
import { formatPrice } from "@/lib/utils";
import { Separator } from "@radix-ui/react-separator";
import { ShoppingCart } from "lucide-react";
import Image from "next/image";
import Link from "next/link";

const Cart = () => {

    const itemCount = 0;
    const fee = 1;

    return (
        <Sheet>
            <SheetTrigger className="group -m-2 flex items-center p-2">
                <ShoppingCart areal-hidden className="h-6 w-6 flex-shrink text-gray-400 group-hover:text-gray-500">
                    <span className="ml-2 text-sm font-medium text-gray-700 group-hover:text-gray-800">
                        0
                    </span>
                </ShoppingCart>
            </SheetTrigger>

            <SheetContent className="flex w-full flex-col pr-0 sm:max-w-lg">
                <SheetHeader className="space-y-2.5 pr-6">
                    <SheetTitle> Cart (0)</SheetTitle>
                </SheetHeader>
                {itemCount > 0 ? (
                    <>
                        <div className="flex w-full flex-col pr-6">
                            {/* TODO: cart logic */}
                            cart items
                        </div>

                        <div className="space-y-4 pr-6">
                            <Separator />

                            <div className="space-y-1 5 text-sm">
                                <div className="flex">
                                    <span className="flex-1">Shipping</span>
                                    <span>Free</span>
                                </div>
                                <div className="flex">
                                    <span className="flex-1">Transaction Fee</span>
                                    <span>{formatPrice(fee)}</span>
                                </div>
                                <div className="flex">
                                    <span className="flex-1">Total</span>
                                    <span>{formatPrice(fee)}</span>
                                </div>
                            </div>
                        </div>
                        <SheetFooter>
                            <SheetTrigger asChild>
                                <Link href='/cart' className={buttonVariants({
                                    className: "w-full"
                                })}>Continue to Checkout</Link>
                            </SheetTrigger>
                        </SheetFooter>
                    </>
                ) : (
                    <div className="flex h-full flex-col items-center justify-center space-y-1">
                        <div className="relative mb-4 h-60 w-60 text-muted-foreground" area-hidden="true">
                            <Image src="/hippo-empty-cart.png" fill alt="empty shopping cart hippo" />
                        </div>
                        <div className="text-xl font-semibold">Your cart is empty</div>

                        <SheetTrigger asChild>
                            <Link href="/product" className={buttonVariants({
                                variant: "link",
                                size: "sm",
                                className: "text-sm text-muted-foreground",
                            })}>Add items to your carts to checkout</Link>
                        </SheetTrigger>
                    </div>
                )}
            </SheetContent>
        </Sheet>
    )
}

export default Cart;