export interface UseCase {
  slug: string;
  emoji: string;
  title: string;
  tagline: string;
  description: string;
  problems: Array<{ icon: string; title: string; text: string }>;
  flow: Array<{ actor: string; action: string }>;
  scenarios: Array<{ title: string; text: string }>;
  features: Array<{ icon: string; title: string; text: string }>;

}

export const usecases: UseCase[] = [
  {
    slug: 'hr',
    emoji: '&#128188;',
    title: 'HR & Onboarding',
    tagline: 'Stop emailing personal documents',
    description: 'Securely collect tax forms, government IDs, banking details, and signed documents from new hires. No email threads full of SSNs. No shared drives with open access to W-4s.',
    problems: [
      { icon: '&#128231;', title: 'SSNs in email', text: 'New hires send tax forms and IDs as email attachments. Those files live in inboxes forever, forwarded, searchable, cached on mail servers.' },
      { icon: '&#128194;', title: 'Scattered documents', text: 'Onboarding paperwork arrives through email, Slack, shared drives, and fax. No single secure channel, no audit trail.' },
      { icon: '&#9888;', title: 'Compliance exposure', text: 'Every unsecured copy of a W-4 or passport photo is a potential data breach. One forwarded email can trigger a notification obligation.' },
    ],
    flow: [
      { actor: 'HR', action: 'Generates a Secretary Link for the new hire' },
      { actor: 'New hire', action: 'Clicks the link, uploads tax forms, ID photos, and banking info' },
      { actor: 'HR', action: 'Views the submission with the receipt, downloads what they need' },
      { actor: 'System', action: 'Submission is permanently destroyed after viewing' },
    ],
    scenarios: [
      { title: 'Remote onboarding', text: 'A new hire in another country needs to submit their passport, visa, and local tax ID. One link handles all three documents securely.' },
      { title: 'Benefits enrollment', text: 'Employees submit insurance enrollment forms with dependent SSNs and medical information through a self-destructing channel.' },
      { title: 'Background check consent', text: 'Candidates submit signed authorization forms containing personal identifiers without exposing them in the applicant tracking system.' },
    ],
    features: [
      { icon: '&#128206;', title: 'Multi-file uploads', text: 'Collect multiple documents in a single submission. Tax forms, ID photos, and signed paperwork in one shot.' },
      { icon: '&#128737;', title: 'Passphrase protection', text: 'Add a second factor. Share the link by email, share the passphrase by phone.' },
      { icon: '&#128200;', title: 'Audit trail', text: 'Know exactly when the link was sent, accessed, submitted to, and viewed. Compliance-ready logging.' },
      { icon: '&#128736;', title: 'Branded experience', text: 'New hires see your company logo and messaging. Builds trust from day one.' },
    ],
  },
  {
    slug: 'legal',
    emoji: '&#9878;',
    title: 'Legal & Compliance',
    tagline: 'Maintain chain-of-custody from the start',
    description: 'Request documents, testimony, and evidence from clients, witnesses, or opposing counsel. Every access event is logged. Every submission is ephemeral.',
    problems: [
      { icon: '&#128220;', title: 'Discovery exposure', text: 'Sensitive case documents exchanged over email become part of a discoverable record. Every copy increases the attack surface.' },
      { icon: '&#128269;', title: 'No chain-of-custody', text: 'When documents arrive via email or file share, there is no reliable record of when they were accessed or by whom.' },
      { icon: '&#128275;', title: 'Client data at risk', text: 'Privileged communications and client documents sitting in inboxes, shared drives, and cloud storage without expiration.' },
    ],
    flow: [
      { actor: 'Attorney', action: 'Generates a Secretary Link for the client or witness' },
      { actor: 'Client', action: 'Submits documents, signed declarations, or evidence photos' },
      { actor: 'Attorney', action: 'Views and downloads the submission using the receipt' },
      { actor: 'System', action: 'Submission destroyed. Audit log retained for compliance.' },
    ],
    scenarios: [
      { title: 'Client document collection', text: 'A client needs to provide financial records for a case. One link, one submission, full audit trail, no copies lingering on servers.' },
      { title: 'Witness statements', text: 'A witness submits a signed statement and supporting photos through an ephemeral link. The attorney reviews it once, then it is gone.' },
      { title: 'Regulatory response', text: 'Collect internal documents from employees in response to a regulatory inquiry. Each submission is logged and destroyed after review.' },
    ],
    features: [
      { icon: '&#128200;', title: 'Full audit trail', text: 'Every event logged: creation, access, submission, viewing, destruction. Exportable for court filings.' },
      { icon: '&#128274;', title: 'Passphrase + expiry', text: 'Time-limited links with optional passphrase. The collection window closes on your schedule.' },
      { icon: '&#127759;', title: 'Regional storage', text: 'Store submissions in specific jurisdictions. Meet data residency requirements for cross-border matters.' },
      { icon: '&#128268;', title: 'API integration', text: 'Generate collection links from your case management system. Automate the intake workflow.' },
    ],
  },
  {
    slug: 'it-security',
    emoji: '&#128187;',
    title: 'IT & Security',
    tagline: 'Secure incident reporting and credential collection',
    description: 'Collect incident reports, vulnerability disclosures, screenshots of suspicious activity, and credentials for compromised accounts through self-destructing channels.',
    problems: [
      { icon: '&#128272;', title: 'Credentials in Slack', text: 'When an account is compromised, the new password gets shared over chat. That message is now searchable by everyone in the channel.' },
      { icon: '&#128680;', title: 'Incident evidence lost', text: 'Employees report security incidents by emailing screenshots. Those screenshots sit in the email system indefinitely, often unencrypted.' },
      { icon: '&#128270;', title: 'Vulnerability reports', text: 'External security researchers have no secure way to submit findings. They email details to a shared inbox visible to the whole team.' },
    ],
    flow: [
      { actor: 'IT team', action: 'Generates a Secretary Link for the reporter or affected user' },
      { actor: 'Reporter', action: 'Submits credentials, screenshots, logs, or vulnerability details' },
      { actor: 'IT team', action: 'Views the submission, takes action, submission is destroyed' },
      { actor: 'System', action: 'No credentials lingering in chat, email, or ticketing systems' },
    ],
    scenarios: [
      { title: 'Password reset handoff', text: 'IT generates temporary credentials for a locked-out executive. The credentials are submitted through a Secretary Link and destroyed after viewing.' },
      { title: 'Incident evidence', text: 'An employee notices suspicious login activity. IT sends them a link to securely submit screenshots and account details without exposing them.' },
      { title: 'Bug bounty intake', text: 'External researchers submit vulnerability details, proof-of-concept code, and screenshots through an ephemeral collection link.' },
    ],
    features: [
      { icon: '&#128274;', title: 'Server-side encryption', text: 'Every submission is encrypted with its own unique key before storage. Keys are separated from data at the infrastructure level.' },
      { icon: '&#128206;', title: 'File attachments', text: 'Screenshots, log files, configuration dumps. Whatever the incident requires.' },
      { icon: '&#128268;', title: 'API for automation', text: 'Integrate with your ticketing system. Auto-generate collection links when incidents are created.' },
      { icon: '&#128737;', title: 'Passphrase protection', text: 'Separate the link from the passphrase across different channels for defense in depth.' },
    ],
  },
  {
    slug: 'healthcare',
    emoji: '&#127973;',
    title: 'Healthcare',
    tagline: 'Patient information through a secure, ephemeral channel',
    description: 'Patients submit insurance cards, medical records, consent forms, and photos of conditions through encrypted, self-destructing links. No patient data in email.',
    problems: [
      { icon: '&#128231;', title: 'PHI in email', text: 'Patients email photos of insurance cards and medical documents. That protected health information now lives on email servers indefinitely.' },
      { icon: '&#128241;', title: 'Texted photos', text: 'Patients text photos of skin conditions or injuries to their provider. Those images live on both phones and in carrier logs.' },
      { icon: '&#9888;', title: 'Regulatory exposure', text: 'Every unsecured copy of patient data is a potential regulatory violation. Fines can reach tens of thousands of dollars per incident.' },
    ],
    flow: [
      { actor: 'Provider', action: 'Generates a Secretary Link for the patient' },
      { actor: 'Patient', action: 'Clicks the link, uploads insurance card photos, consent forms, medical records' },
      { actor: 'Provider', action: 'Views the submission, downloads to the EHR, submission is destroyed' },
      { actor: 'System', action: 'No PHI lingering in email, text messages, or shared drives' },
    ],
    scenarios: [
      { title: 'Pre-visit intake', text: 'New patient submits insurance card photos, medication list, and signed consent form before their first appointment.' },
      { title: 'Dermatology triage', text: 'Patient submits photos of a skin condition for a provider to review before deciding whether an in-person visit is needed.' },
      { title: 'Referral documents', text: 'Specialist receives imaging results and prior treatment records from the referring provider through a self-destructing link.' },
    ],
    features: [
      { icon: '&#128206;', title: 'Image uploads', text: 'Patients submit photos of insurance cards, conditions, and documents. High-resolution images, securely transmitted.' },
      { icon: '&#127759;', title: 'US data storage', text: 'All submissions stored on US-based infrastructure. No data leaves the country.' },
      { icon: '&#128200;', title: 'Full audit trail', text: 'Complete access log for every submission. Who created it, who accessed it, when it was destroyed.' },
      { icon: '&#128736;', title: 'Practice branding', text: 'Patients see your practice name and logo. Familiar branding reduces friction and builds trust.' },
    ],
  },
  {
    slug: 'journalism',
    emoji: '&#128240;',
    title: 'Journalism & Tips',
    tagline: 'Protect your sources',
    description: 'Create anonymous tip lines. Sources submit documents, photos, and statements through ephemeral links. No metadata trail. No persistent storage. View once, then gone.',
    problems: [
      { icon: '&#128231;', title: 'Email metadata', text: 'Sources who email tips leave sender addresses, IP addresses, timestamps, and routing headers. Metadata that identifies them even if the content is vague.' },
      { icon: '&#128241;', title: 'Messaging traces', text: 'Signal, WhatsApp, and SMS all leave traces on devices. Messages can be recovered forensically. Read receipts and typing indicators reveal interaction patterns.' },
      { icon: '&#128230;', title: 'Persistent storage', text: 'Documents uploaded to shared drives remain indefinitely. Cloud storage providers can be subpoenaed. Deletion does not mean destruction.' },
    ],
    flow: [
      { actor: 'Journalist', action: 'Generates a Secretary Link, publishes it as a tip line' },
      { actor: 'Source', action: 'Clicks the link, submits documents, photos, or a written statement' },
      { actor: 'Journalist', action: 'Views the submission once using the receipt' },
      { actor: 'System', action: 'Submission permanently destroyed. No server-side copies remain.' },
    ],
    scenarios: [
      { title: 'Anonymous tip line', text: 'A newsroom publishes a Secretary Link on their website. Whistleblowers submit documents without creating an account or revealing their identity.' },
      { title: 'Source document drop', text: 'A journalist sends a link to a known source. The source uploads leaked documents that the journalist views once before the link self-destructs.' },
      { title: 'Photo evidence', text: 'A source at a protest submits photos and a written account of events. No camera roll syncing, no cloud backup, no metadata breadcrumbs.' },
    ],
    features: [
      { icon: '&#128274;', title: 'Encrypted by default', text: 'Every submission is encrypted with its own unique key. Keys are separated from stored data. Add a passphrase for an additional layer only you and the source know.' },
      { icon: '&#128165;', title: 'True destruction', text: 'Submissions are permanently destroyed after viewing. Not soft-deleted. Not archived. Purged from all storage.' },
      { icon: '&#127760;', title: 'Custom domains', text: 'Run the tip line on your newsroom domain. Sources see a familiar URL, not a third-party service.' },
      { icon: '&#128737;', title: 'No account required', text: 'Sources never create an account. No username, no email, no identity to subpoena.' },
    ],
  },
  {
    slug: 'insurance',
    emoji: '&#128203;',
    title: 'Insurance Claims',
    tagline: 'Streamline evidence collection from claimants',
    description: 'Adjusters send a link. Claimants submit photos of damage, receipts, police reports, and other claim documentation. Evidence flows securely into the case file.',
    problems: [
      { icon: '&#128247;', title: 'Photos in email', text: 'Claimants email damage photos. Those images sit in inboxes, forwarded between adjusters, and backed up to mail servers with PII attached.' },
      { icon: '&#128194;', title: 'Scattered evidence', text: 'Receipts arrive by email. Police reports by fax. Photos by text. Statements by mail. No single secure intake channel.' },
      { icon: '&#128272;', title: 'PII exposure', text: 'Claim documents contain names, addresses, policy numbers, and financial information. Every unsecured copy is a liability.' },
    ],
    flow: [
      { actor: 'Adjuster', action: 'Generates a Secretary Link for the claimant' },
      { actor: 'Claimant', action: 'Submits photos of damage, receipts, police report, written statement' },
      { actor: 'Adjuster', action: 'Views the evidence package, downloads to the claims system' },
      { actor: 'System', action: 'Submission destroyed. Audit log retained for the claim file.' },
    ],
    scenarios: [
      { title: 'Property damage', text: 'A homeowner submits photos of storm damage, contractor estimates, and a personal property inventory through a single branded link.' },
      { title: 'Auto accident', text: 'A driver submits accident scene photos, the police report, repair estimates, and medical bills. All in one secure submission.' },
      { title: 'Business interruption', text: 'A business owner submits inventory loss documentation, financial statements, and photos of damage for a commercial claim.' },
    ],
    features: [
      { icon: '&#128206;', title: 'Multi-file uploads', text: 'Photos, PDFs, receipts, reports. Claimants submit everything in a single session.' },
      { icon: '&#128200;', title: 'Claim audit trail', text: 'Document when evidence was requested, submitted, and reviewed. Defensible chain-of-custody for disputed claims.' },
      { icon: '&#128268;', title: 'Claims system API', text: 'Generate collection links from your claims platform. Evidence flows directly into the case file.' },
      { icon: '&#128736;', title: 'Carrier branding', text: 'Claimants see your brand. Familiar experience reduces friction during a stressful process.' },
    ],
  },
];

export function getUseCase(slug: string): UseCase | undefined {
  return usecases.find(uc => uc.slug === slug);
}
