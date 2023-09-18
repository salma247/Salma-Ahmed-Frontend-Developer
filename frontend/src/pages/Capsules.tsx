import {useQuery} from 'react-query';
import {CapsuleList} from '../components/Capsule/CapsuleList';
import {fetchCapsules} from '../services/api';

export function Capsules() {
    const {data, isLoading} = useQuery('capsules', () => fetchCapsules(10, 0));
    
    if (isLoading) {
        return <div>Loading...</div>;
    }

    if (!data) {
        return null;
    }
    
    return (
        <div className="mx-4 flex justify-center py-4">
        <CapsuleList data={data} />
        </div>
    );
    }