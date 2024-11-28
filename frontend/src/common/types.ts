import exp from "constants";

export type Summary = {
    status: string;
    results: Result[];
};

export type Result = {
    idsummary: string;
    summary_text: string;
    summary_text_en: string;
    risk_score: string;
    creation_date: string;
    last_edit: string;
    domain_name: string;
    servizi_esposti_score: number;
    dataleak_score: number;
    rapporto_leak_email_score: number;
    spoofing_score: number;
    open_ports_score: number;
    blacklist_score: number;
    vulnerability_score_active: number;
    vulnerability_score_passive: number;
    certificate_score: number;
    n_port: Record<string, {n: number}>;
    n_cert_attivi: number;
    n_cert_scaduti: number;
    n_asset: number;
    n_similar_domains: number;
    email_security: EmailSecurity;
    n_dataleak: DataLeak;
    n_vulns: Vulnerabilities;
    waf: WebApplicationFirewall;
    cdn: ContentDeliveryNetwork;
    unique_ipv4: number;
    unique_ipv6: number;
};

type EmailSecurity = {
    spoofable: string;
    dmarc_policy: string;
    blacklist_detections: number;
    blacklist_total_list: number;
    blacklist_detected_list: string[];
};

type DataLeak = {
    total: LeakDetails;
    resolved: LeakDetails;
    unresolved: LeakDetails;
    enumeration: number;
};

type LeakDetails = {
    vip: number;
    domain_stealer: number;
    potential_stealer: number;
    other_stealer: number;
    general_leak: number;
};

type Vulnerabilities = {
    total: VulnerabilityDetails;
    active: VulnerabilityDetails;
    passive: VulnerabilityDetails;
};

type VulnerabilityDetails = {
    critical: number;
    high: number;
    medium: number;
    low: number;
    info: number;
};

type WebApplicationFirewall = {
    count: number;
    assets: string[];
};

type ContentDeliveryNetwork = {
    count: number;
    assets: string[];
};

export type Section = 'summary'|'scores'|'ports'|'dataleak'|'vulnerabilities'|'waf'|'others';

