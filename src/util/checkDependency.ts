import assert from "assert";

const checkDependency = (mapping: object, service: string) => {
    assert(service, `missing dependency ${service}`);
}

export default checkDependency;