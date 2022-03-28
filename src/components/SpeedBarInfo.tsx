import sampleData from '../mocks/sample_start.json';

const SpeedBarInfo = () => {
    const {requestCount, totalCount, response} = sampleData;
    const {count, normal, slow, verySlow} = response;

    return <div>
        hi
    </div>
}

export default SpeedBarInfo;