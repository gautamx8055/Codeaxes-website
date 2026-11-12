import catalogue from './client-catalogue.json';

// The client's names, ordering, solution lists and technology subgroups live in
// one data file so the navigation, pages and assistant cannot drift apart.
export const industryCatalogue = catalogue.industries;
export const engineeringPractices = catalogue.practices;
export const technologyCatalogue = catalogue.technologyCategories;
export const catalogueServiceGroups = catalogue.serviceGroups;

export const catalogueCounts = {
  groups: catalogueServiceGroups.length,
  services: catalogueServiceGroups.reduce((total, group) => total + group.services.length, 0),
  industries: industryCatalogue.length,
  technologyCategories: technologyCatalogue.length,
};
