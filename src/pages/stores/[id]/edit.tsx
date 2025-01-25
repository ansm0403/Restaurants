import { useRouter } from 'next/router';
import React from 'react'

export default function StoreEditPage() {
    const router = useRouter();
    const { id } = router.query;
    
    return (
        <div>store edit : {id}</div>
    )
}
