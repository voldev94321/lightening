/* eslint-disable @next/next/no-img-element */
'use client';

import { TiStarFullOutline } from "react-icons/ti";

const avatarUrls = [
    "https://s3-alpha-sig.figma.com/img/bdea/9d88/fc2c73a1dc172bfdd420ec6bc4c7fe83?Expires=1725235200&Key-Pair-Id=APKAQ4GOSFWCVNEHN3O4&Signature=OjY~vXnJStBaI30t5Ra1Ag9ao6OnDSp2qfWSPY03jZVy5r6KWmW1wTHXijb1vIxL3PMbN5cvribtUtldKYwiRiyf-j0rX8UXUv6b5epsWMnvPboJ-q~4GdauPlYZHSyeOzhtB3LMobig-LVFAqfDtO-XAv-LM1ZmQ1~4PEnwtiREU0VWDWpYS5bN4Ky59BImrmtj3AdQwyKvJPjTTuBKcjK6QvepuRWgAeHcm6Ou6zp9oyDOzT4sMYkxqxzujkm9DmfmyTF5Bv8l82lU4NZrFUw3lVCjQ6JXah8Sqzy33qDEswELGrlL~imFhefVIrreRCdIIgrP1C-I2Kbkd2KYaw__",
    "https://s3-alpha-sig.figma.com/img/199d/613c/fb356aaaf0d48610af6e57b9557d1e32?Expires=1725235200&Key-Pair-Id=APKAQ4GOSFWCVNEHN3O4&Signature=MHgDWOfDzXRZMrhv9dZtEY0WMDwxLprEjqyBjVd6yj6B38ppgA2rAtISJ8uhY6raU2TYP3MTgZGqROdoU-AofOMrK4D1yzfLRj49iGKRavTG32V3HkZBGF7S06Kx-LM5lTZBpWh8YEoAU~s2A9zYKcx~-pWieFdRZW77Z9Z66Jz3TOazZp1RhGGuB6MkxXBZR7s6QXwJdaIImkwddOMZlsogycxv6SmA0o3-cPRv3AxVpn2V2y1KOOVeJO~GDj2cbUdVbdCNTOn2d5VJnb9ttMLJvI50-GidetXp-QSiGzS7g~yRqshnQEbVFUDvB1bxm6ONLRsUztuny2A2mDbV3g__",
    "https://s3-alpha-sig.figma.com/img/b9bc/d44a/b7dee006629577799bb9dd93158d3962?Expires=1725235200&Key-Pair-Id=APKAQ4GOSFWCVNEHN3O4&Signature=bG6FYaJOyL9lh0JnL9t~cDCIDpjs-ViDcl6F6g14g-X4fylZ33vJS9M0A3VQLLzT1blJsCOKmvBvmmDhLHw8pakVKRxCrGbzivU0~Qvaq7rhTy0Pw8JFgtj1gQAhRu1t-OYAWswx9o6PMuORf8gPrWB~5xWlTm7o2i8S5IQAXcvOv3p9~ceRyKvoGhAJRl2~bWTf0uUj4PXb0BPYKrj1l2cakA21kQE-kuqT1z71dWFtT7yO4gIGJ70nVHwkpY9iRsV4TnNJF6BCAxjwiEPN9mqu2GHS655sh5DPQWYquj~l2qU8g12v9oHrQblMYwzxka6TUa4Zlzphfgf6x2q51w__",
]
const CustomerRating = () => {
    return <div className="flex items-center gap-2 bg-success-background border-2 border-success rounded-lg px-5 py-2 w-fit">
        <div className="flex items-center">
            {avatarUrls.map(( value, index ) => (
                <img key={"avatarImg" + index} src={value} alt="avatar" className={`-mr-3 w-7 h-7 object-cover ${index != 1 && "object-top"} rounded-full border-2 border-success-border`}/>
            ))}
            <div className="w-7 h-7 rounded-full border-2 border-success-border bg-success relative">
                <div className="absolute text-white text-2xs top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2">+1k</div>
            </div>
        </div>
        <div>
            <div className="flex items-center gap-1 text-lg font-semibold">Rated 4.9 <TiStarFullOutline className="text-success" /> on TrustPilot</div>
            <div className="opacity-75">By 1000+ Customers</div>
        </div>
    </div>
};

export default CustomerRating;