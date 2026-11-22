// Open roles, from the live careers page (research/CONTENT.md). Wording kept; separators and capitals normalised.
export type Role = { title: string; subject: string; where: string; type: string; about: string; you: string[]; nice: string[] };

export const roles: Role[] = [
  {
    title: 'Forward Deployment Engineer', subject: 'Forward Deployment Engineer',
    where: 'Pune, Ahmedabad', type: 'Full-time, on-site with customers',
    about: 'Live inside our first TPAs, insurers, and hospitals for weeks at a time. Translate their ground truth (denial logic, IRDAI quirks, NPPA caps, NABH workflows) into product. The first ten hires here will shape how AdjudoAI gets adopted.',
    you: ['5+ years shipping software with at least 1 year embedded with customers', 'Comfortable writing production code in Python or TypeScript and SQL', 'Strong instinct for what to build, what to script, what to throw away', 'Empathy for non-technical reviewers; you’ll sit next to claims officers'],
    nice: ['Prior life in health insurance, TPA ops, insurer claims, or hospital revenue cycle', 'Experience with HL7/FHIR or IRDAI/NABH workflows'],
  },
  {
    title: 'TPA / Insurance Domain Specialist', subject: 'TPA / Insurance Domain Specialist',
    where: 'Pune, Ahmedabad, Remote (India)', type: 'Full-time',
    about: 'You’ve adjudicated claims for a living, at a TPA, an insurer, or a hospital billing desk. You know exactly where reviewers get burned: room-rent proration, NABH tariffs, NPPA caps, PPN rates, sub-limit stacking, IRDAI disclosure norms. You’ll be the ground truth the product is built against, writing the rules, labelling the golden set, and catching the decisions that are technically defensible but wrong in practice.',
    you: ['5+ years in TPA operations, insurer claims, or hospital revenue-cycle management', 'Deep on Indian health-policy language: cashless, reimbursement, exclusions, waiting periods', 'Can articulate why a claim was cut and cite the clause that justifies it', 'Comfortable working shoulder-to-shoulder with engineers who don’t know insurance yet'],
    nice: ['Exposure to payer/insurer adjudication (ICD-10, NABH tariffs, NPPA)', 'Have run a QC / audit function or trained junior adjudicators'],
  },
  {
    title: 'Infrastructure Engineer, Inference Platform', subject: 'Infrastructure Engineer · Inference Platform',
    where: 'Remote (India), Pune HQ preferred', type: 'Full-time',
    about: 'Own the inference path end-to-end. We serve fine-tuned LLMs on Lambda H100s, cloud, and customer on-prem (NABH-bound hospitals can’t ship data to the cloud). You’ll run vLLM, optimize prefix caching for chat, push p99 latencies down, and design a deploy story that ships to an insurer’s VPC and a hospital’s air-gapped rack with the same artifact.',
    you: ['Ran production inference at scale: vLLM, TensorRT-LLM, SGLang, or similar', 'Cloud + on-prem fluency: GPU scheduling, networking, secrets, observability', 'Comfortable with Kubernetes, Terraform, and Linux systems work', 'You think about p50 vs p99, KV cache, batching, and quantization without prompting'],
    nice: ['Shipped on-prem GPU appliances or air-gapped enterprise installs', 'GPU kernel work (CUDA, Triton) or model-serving internals'],
  },
  {
    title: 'Security Engineer', subject: 'Security Engineer',
    where: 'Remote (India)', type: 'Full-time',
    about: 'AdjudoAI handles sensitive health data on day one. You’ll own IRDAI + DPDP controls, and walk us through ISO 27001 in year one. The audit trail is signed by construction (HMAC-chained adjudications), so your job is to make sure the rest of the surface is just as defensible.',
    you: ['5+ years in security engineering at a health, fintech, or infra company', 'Hands-on with threat modeling, SAST/DAST, secret hygiene, IAM design', 'Have led at least one ISO 27001 / IRDAI audit through to signed report', 'Read code as well as policy: you can spot a bad RLS policy and a bad DPA clause'],
    nice: ['Familiarity with sensitive health-data handling, DPA workflows, and IRDAI / DPDP requirements', 'Worked on detection engineering or incident response in regulated industries'],
  },
  {
    title: 'Backend Engineer, Health Tech', subject: 'Backend Engineer · Health Tech',
    where: 'Remote (India), Pune or Ahmedabad preferred', type: 'Full-time',
    about: 'Build the claims engine itself: ingestion, normalization, the policy-clause graph, the adjudication state machine, the audit ledger. You’ll integrate with TPA back-offices, insurer claim systems, and EHR/HIS feeds. We care more about correctness and explainability than throughput. Every byte you process gets cited in a signed decision.',
    you: ['5+ years building backend systems in Python / Go / TypeScript', 'Strong on Postgres, schema design, and event-sourced or append-only data models', 'Comfortable with FastAPI, async I/O, and writing the test that catches the regression', 'Domain interest in healthcare: claims, billing codes, policy logic'],
    nice: ['Hands-on with HL7 v2 / FHIR, ICD-10, NPPA, NABH', 'Built audit/compliance systems where every row needs a defensible provenance trail'],
  },
  {
    title: 'AI / ML Engineer', subject: 'AI / ML Engineer',
    where: 'Remote (India), Ahmedabad or Pune preferred', type: 'Full-time',
    about: 'Own the model: fine-tune, eval, deploy, observe, redo. We’ve already shipped Qwen2.5-14B fine-tunes that beat GPT-4o on every TPA decision metric. Next: better RAG over policy clauses, faster decoders, drift detection, and a continuous eval loop fed by real reviewer corrections.',
    you: ['Trained or fine-tuned LLMs (LoRA / QLoRA / full SFT) on real, messy data', 'Built rigorous evals, not just accuracy but calibration, drift, and failure-mode breakdowns', 'RAG fluency: chunking, hybrid search, reranking, citation faithfulness', 'Comfortable with PyTorch, HuggingFace, vLLM, and a GPU debugger'],
    nice: ['Schema-constrained / structured decoding, function calling, agent loops', 'Worked in regulated domains where wrong outputs carry legal weight'],
  },
  {
    title: 'Data Labeling / Golden-Set Lead', subject: 'Data Labeling / Golden-Set Lead',
    where: 'Pune, Ahmedabad, Remote (India)', type: 'Full-time',
    about: 'Own the golden set: the labeled claims the whole engine is measured against. You’ll design labeling workflows, define the rubric with our insurance specialists, run QA on labelers, and turn messy real claims into clean, adjudication-ready ground truth. If the labels are wrong, everything downstream is wrong. This is one of the highest-leverage seats in the company.',
    you: ['3+ years in data labeling / annotation ops, QA, or clinical / claims coding', 'Rigor about label quality: inter-annotator agreement, rubrics, spot audits', 'Can write clear guidelines and train a labeling team from scratch', 'SQL / spreadsheet fluency to slice, sample, and audit the dataset'],
    nice: ['Health-insurance or medical-coding background (ICD-10, NABH tariffs)', 'Built or run a labeling tool / workflow (Label Studio or an internal one)'],
  },
  {
    title: 'Engineering / ML Intern', subject: 'Engineering / ML Intern',
    where: 'Pune, Ahmedabad, Remote', type: 'Internship, 3 to 6 months, convertible to full-time',
    about: 'We take interns seriously. You’ll own a real slice of the product, not a toy project. Depending on your strengths that might be a piece of the extraction pipeline, an eval harness, a slice of the reviewer console, or model experiments. You’ll ship to the same bar as everyone else, with a senior engineer in your corner.',
    you: ['Final-year or recent grad in CS, or a self-taught builder with a portfolio', 'Fluent in Python or TypeScript; you’ve shipped something end-to-end', 'Curious about healthcare, regulated AI, or hard systems problems', 'You read the error before asking, and you ask well when you’re stuck'],
    nice: ['Played with LLMs, RAG, fine-tuning, or evals on your own time', 'A GitHub, a paper, a side project, or a competition you’re proud of'],
  },
];
