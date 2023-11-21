
import Meta from '../../components/layout/meta';
import ComponentListing from '../../components/other/ComponentListing';
import PageHeading from '../../components/other/PageHeadings';

const ComponentList = () => {
    return ( 
        <>
        <Meta 
            title={'UI Components - Tailwind Components List'} 
            description={'Get started on your web projects with UI Components Tailwind CSS components'} 
            url={'/components'}
        />
            <PageHeading 
                title={'Components'} 
                isComponent={false} 
                description={'Get started on your web projects with UI Components Tailwind CSS components'} 
            />

            <ComponentListing />

        </>
     );
}
 
export default ComponentList;