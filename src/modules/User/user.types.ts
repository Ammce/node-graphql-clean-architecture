import gql from "graphql-tag";

export const applicantTypes = gql`
  extend type RootQuery {
    applicant(userId: ID): Applicant
    applicants(first: Int, after: String, filter: UserFilter): UserConnection
  }

  extend type RootMutation {
    login(input: LoginInput!): Session
    loginAdmin(input: LoginInput!): Session
    logout: Session
    collectPropertyData: CollectPropertyData
    addUserGivenMortgage(input: UserGivenMortgageDataInput): MortgageSummary
  }

  input LoginInput {
    code: String
    csrfId: String!
    email: String
  }

  input UserFilter {
    email: String
  }

  enum MaritalStatus {
    NOT_GIVEN
    UNMARRIED
    MARRIED
    DIVORCED
    SEPARATED
    WIDOW_ER
    REGISTERED_PARTNER
    SEPARATED_PARTNER
    DIVORCED_PARTNER
    REMAINING_PARTNER
  }

  enum Gender {
    M
    F
  }

  enum LivingArrangement {
    OWN_PROPERTY
    RENT_PROPERTY
    LIVING_WITH_PARENTS
  }

  enum PledgeKind {
    PROPERTY
    MOVABLE
  }

  enum PropertyType {
    APARTMENT
    DETACHED_HOUSE
    TERRACED_HOUSE
    SEMI_DETACHED_HOUSE
    LEISURE_HOME
    DORM
    RESIDENTIAL_PLOT
    CABIN_PLOT
    SCHOOL_KINDERGARTEN
    COMMERCIAL_BUILDING
    FARM
    HOUSING
    HOUSE
    SHARED_HOUSING
    GARAGE
    UNDEVELOPED
    PUBLIC
    HEALTH
    MEDIA_COMM
    CULTURE_AND_SPORTS
    RELIGION
    TRANSPORTATION
    OTHER
    UNKNOWN
  }

  enum PropertyOwnership {
    SELF_OWNED
    HOUSING_COOPERATIVE
    UNKNOWN
  }

  type Session {
    intercomHmac: String
    applicant: Applicant
    expiration: String
    isActive: Boolean
  }

  type FamilyMember {
    id: String
    age: Int
    gender: Gender
    relation: String
  }

  type Applicant {
    id: ID!
    firstName: String
    lastName: String
    SSN: String
    age: Int
    email: String
    mobile: String
    maritalStatus: MaritalStatus
    livingArrangement: LivingArrangement
    family: [FamilyMember]
    debt: UserDebt # defined in debt module
    products: Products
    createdAt: String
    updatedAt: String
    pledges: [Pledge]
    property: PropertySummary
    applications(first: Int, after: String): ApplicationConnection # ApplicationConnection is defined in ApplicationModule
  }

  type CollectPropertyData {
    property: PropertySummary
    mortgage: MortgageSummary # MortgageSummary is defined in debt module
  }

  type Property {
    id: ID
    street: Street
    value: Float
    purchasedAt: String

    areaMarketScore: Float
    netValueEstimate: Float
    grossValueEstimate: Float
    municipalityScore: Float
    valueEstimateAccuracyLevel: Float
    commonDebt: Float
    customerApprovedValue: Float
    valueEstimate: Float
    valueEstimateHaircut: Float
    estateType: PropertyType
    propertyType: PropertyOwnership
    cadastralUnitNumber: String
    propertyUnitNumber: String
    leaseholdNumber: String
    condominiumUnitNumber: String
    ownershipShare: Float
    municipality: Municipality
    pledges: [Pledge]
    zip: Zip
    housingCooperative: HousingCooperative
  }

  type Street {
    name: String
    number: String
    letter: String
  }

  type Zip {
    code: String
    area: String
  }

  type HousingCooperative {
    id: String
    name: String
    orgID: String
    shareNumber: String
  }

  type Municipality {
    name: String
    number: String
  }

  type Pledge {
    id: ID
    updatedAt: String
    createdAt: String
    creditorName: String
    value: Float
    type: PledgeKind
    ownershipShare: Float
  }

  type UserConnection {
    totalCount: Int
    edges: [UserEdge]
    pageInfo: PageInfo # PageInfo is defined in common module
  }

  type UserEdge {
    node: Applicant
    cursor: String
  }

  input UserGivenMortgageDataInput {
    propertyId: String
    creditorName: String
    totalBalance: Float
  }
`;
