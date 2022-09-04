import {FC} from 'react';
import {useAppSelector} from 'redux/hooks';
import SearchGuideline from './SearchGuideline';
import {Input} from 'react-skat-ui';

const Search: FC = () => {
    const guideline = useAppSelector(state => state.guidline.value);
    return (
        <>
            <Input placeholder='Search...' sx='width: 50%'/>
            {guideline && <SearchGuideline/>}
        </>
    );
};

export default Search;
