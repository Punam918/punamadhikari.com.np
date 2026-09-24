"use strict";

function initCustomCursor() {
  if (
    !window.matchMedia("(pointer: fine)").matches ||
    window.matchMedia("(prefers-reduced-motion: reduce)").matches
  ) return;

  const ring = document.createElement("span");
  const dot = document.createElement("span");
  ring.className = "custom-cursor-ring";
  dot.className = "custom-cursor-dot";
  ring.setAttribute("aria-hidden", "true");
  dot.setAttribute("aria-hidden", "true");
  document.body.append(ring, dot);
  document.documentElement.classList.add("has-custom-cursor");

  let targetX = -100;
  let targetY = -100;
  let ringX = -100;
  let ringY = -100;

  function drawCursor() {
    ringX += (targetX - ringX) * 0.18;
    ringY += (targetY - ringY) * 0.18;
    ring.style.transform = `translate3d(${ringX}px, ${ringY}px, 0)`;
    requestAnimationFrame(drawCursor);
  }

  document.addEventListener("mousemove", (event) => {
    targetX = event.clientX;
    targetY = event.clientY;
    dot.style.transform = `translate3d(${targetX}px, ${targetY}px, 0)`;
    ring.classList.add("is-visible");
    dot.classList.add("is-visible");
  }, { passive: true });
  document.addEventListener("mouseover", (event) => {
    const interactive = Boolean(event.target.closest("a, button, select, input, label, summary, [role='button']"));
    ring.classList.toggle("is-interactive", interactive);
    dot.classList.toggle("is-interactive", interactive);
  });
  document.documentElement.addEventListener("mouseleave", () => {
    ring.classList.remove("is-visible");
    dot.classList.remove("is-visible");
  });
  drawCursor();
}

initCustomCursor();

const editions = {
  en: {
    ui: {
      skip: "Skip to content",
      portfolio: "AI ENGINEERING / PORTFOLIO",
      cv: "CV (English)",
      edition: "THE PROFESSIONAL EDITION",
      location: "Kathmandu, Nepal",
      previous: "Previous",
      next: "Next page",
      page: "Page",
      footer: "Research-minded. Engineering-driven.",
      language: "Language",
      chapters: "Chapters",
      copy: "Copy email",
      copied: "Email copied",
      copyFailed: "Please use the email link above.",
      repo: "View repository",
      credentials: "Fellowships & credentials",
      approach: "Engineering approach",
      system: "Inside the system",
      stack: "Technology",
      contact: "Get in touch",
      email: "Email",
      profile: "Professional profile",
      code: "Code & projects",
      download: "Download CV (English)",
      portrait: "Portrait of Punam Adhikari",
      blog: "Blog",
      blogCollection: "Project notes",
      blogIntro: "Four detailed build stories spanning language-model training, research RAG, human-guided coding agents, and governed data-to-RAG systems.",
      readArticle: "Read article",
      backToBlogs: "All posts",
      closeBlog: "Close blog",
      atGlance: "Project at a glance",
      architecture: "System architecture",
      architectureNote: "Read the flow from left to right.",
      deepDive: "Engineering deep dive",
      byline: "Written by Punam Adhikari",
      onThisPage: "In this article",
      buildFlow: "The build flow",
      chapter: "Chapter",
      of: "of",
      case: "Selected project",
      focus: "Core disciplines",
      swipeSections: "Swipe →",
    },
    chapters: [
      "About me",
      "Experience",
      "Education",
      "Projects",
      "Expertise",
      "Contact",
    ],
    pageTitles: [
      "About me",
      "Experience",
      "Abacus Insights",
      "Danson Solutions",
      "Education",
      "AI/ML · LLM & RAG I",
      "AI/ML · LLM & RAG II",
      "Data Engineering I",
      "Data Engineering II",
      "Expertise",
      "Contact",
    ],
    about: {
      role: "AI/ML & Data Engineer",
      eyebrow: "01 / A PERSONAL INTRODUCTION",
      title: "AI research, engineered for production.",
      lead: "I’m Punam, an AI engineer focused on building reliable machine learning systems—from model development to production deployment.",
      body: [
        "My background in Computer Engineering spans speech recognition, large language model fine-tuning, computer vision, and data platforms.",
        "I work across the full engineering lifecycle: designing experiments, evaluating models, building scalable pipelines and APIs, and optimizing systems for production.",
      ],
      strengths: [
        ["Applied AI", "LLMs, RAG & multimodal systems"],
        ["ML Engineering", "Evaluation, APIs & deployment"],
        ["Data Systems", "ETL, Spark & cloud pipelines"],
        ["Computer Vision", "Detection & deep learning"],
      ],
      metrics: [
        "Word error rate achieved in Korean ASR fine-tuning",
        "Accuracy achieved by a custom CNN for brain tumor classification",
      ],
      caption: "AI research meets engineering",
      current: "AI Research Engineer",
    },
    experience: {
      title: "Professional experience at NSDevil.",
      intro:
        "AI Research Engineer at NSDevil, a South Korean company based in Daejeon, Korea.",
      note: "Daejeon, Korea · Oct 2025–Present",
      heading: "AI Research Engineer",
      company: "NSDevil · Daejeon, Korea",
      period: "Oct 2025 – Present",
      summary:
        "I develop and productionize AI systems across language, assessment, retrieval, and model deployment, taking work from experimentation through evaluation and delivery.",
      highlights: [
        [
          "Korean speech AI",
          "Fine-tuned Whisper, NeMo, and Conformer models for Korean ASR, achieving under 10% word error rate, and developed Korean text-to-speech systems with ESPnet.",
        ],
        [
          "Explainable assessment",
          "Built an explainable Korean essay-scoring system using microservices and LLM-based rubric evaluation for transparent, structured feedback.",
        ],
        [
          "LLM adaptation",
          "Fine-tuned HyperCLOVAX 3B and 14B models with SFT, DPO, LoRA, and QLoRA across multiple academic domains.",
        ],
        [
          "Multimodal RAG & delivery",
          "Designed a production-grade multimodal retrieval system and deployed transformer models on remote GPU infrastructure with CI/CD workflows.",
        ],
      ],
      jobs: [],
    },
    education: {
      title: "A foundation for lifelong learning.",
      intro:
        "Computer engineering foundations, complemented by focused study in machine learning, computer vision, and data platforms.",
      note: "Pulchowk Engineering Campus / 2021–2025",
      heading: "Education & development",
      degree: "Bachelor’s in Computer Engineering",
      school: "Pulchowk Engineering Campus",
      credentialNotes: [
        "Selected fellow",
        "International summer internship",
        "Andrew Ng · Coursera",
        "Data engineering",
        "Data engineering",
        "Intermediate & Advanced",
      ],
    },
    blogs: [
      {
        title: "Building a language model on one laptop GPU",
        category: "THE BUILD LOG / LLM120",
        intro:
          "What it takes to turn random weights into a small English model and assistant on an 8 GB GPU.",
        note: "September 2026 · 7 min read",
        heading: "Small compute changes every decision.",
        lead:
          "LLM120 is a single-GPU language-model training system: it learns a tokenizer, initializes a decoder-only Transformer from random weights, pretrains a base model, and then turns that base into a small assistant through four distinct alignment stages.",
        sections: [
          [
            "The problem and scope",
            [
              "The easiest way to make a small language-model demo is to download a pretrained checkpoint and fine-tune it. I wanted to understand the layers beneath that convenience, so LLM120 begins with two genuinely blank components: randomly initialized model weights and a tokenizer trained from the project’s own corpus sample. The system owns the complete path from Parquet documents to token shards, base-model checkpoints, aligned policies, and finally a local chat command.",
              "The constraint is as important as the objective. The target machine has an RTX 5050 laptop GPU with about 8 GB of VRAM, 24 GB of system memory, and ordinary laptop cooling. That rules out vague ‘scale it later’ thinking. Model width, KV heads, microbatch size, optimizer state, checkpoint rotation, and even the order of preprocessing steps must fit a machine that can throttle, suspend, or be interrupted during a run lasting many days.",
            ],
          ],
          [
            "Corpus and tokenizer",
            [
              "Dataset choice was the first major engineering decision. Downloading an arbitrary 250 GB prefix of the older SmolLM corpus would produce an uncontrolled mixture that this GPU could not consume responsibly. The default is instead EleutherAI’s 10B-token SmolLM2 sample, a 25.6 GB blend of educational web text, Cosmopedia, mathematics, code, and filtered web sources. It is still a long run, but it is a coherent and inspectable budget.",
              "The tokenizer is a 32,768-entry byte-level BPE trained before production tokenization begins. Byte fallback means unseen text—including Devanagari—can always be represented without an unknown token, although representation efficiency is not the same as language quality. The tokenizer also carries BOS/EOS boundaries, explicit chat roles, and a versioned template. During preparation, deterministic content hashes assign validation documents, and the trainer reads packed uint16 shards through memory maps rather than loading the corpus into RAM.",
            ],
          ],
          [
            "Decoder architecture",
            [
              "The default network stays close to a proven small-model shape: 30 decoder layers, hidden width 576, a 1,536-wide SwiGLU feed-forward block, 9 query heads, and 3 key/value heads. Grouped-query attention reduces KV projection and cache cost without collapsing to a single shared KV head. Rotary position embeddings encode order, RMSNorm stabilizes residual streams, and tied input/output embeddings avoid paying for two separate 32K-by-576 matrices.",
              "The implementation uses Transformers’ LlamaConfig and LlamaForCausalLM rather than reimplementing attention kernels. That keeps the research focus on data, training, recovery, and evaluation while still starting with random weights. Attention runs through PyTorch SDPA; biases are disabled; training cache is disabled; and sequence length is fixed at 2,048 tokens. The resulting default configuration contains exactly 125,077,824 parameters when the tokenizer has the intended vocabulary size.",
            ],
          ],
          [
            "Training on constrained hardware",
            [
              "A training step processes four 2,048-token sequences at a time and accumulates gradients across eight microsteps. That gives a 65,536-token global batch without pretending all 32 sequences fit in memory simultaneously. BF16 handles forward and backward compute, while trainable weights and Adam moments remain FP32 for stability. Activation checkpointing trades extra computation for lower memory; fused AdamW, TF32 matrix multiplication, gradient clipping, and a warmup–stable–linear-decay learning-rate schedule complete the core loop.",
              "Synthetic benchmarks in the repository report 6,460–7,449 tokens per second with roughly 5.04 GiB peak allocated memory on the target laptop. Those numbers are planning evidence, not a guarantee: full training also pays for validation, checkpoint writes, data access, and thermal throttling. At 90% utilization, processing 10B tokens is estimated at roughly 17–20 days. The project therefore treats throughput measurement and a real pilot as gates before committing to the long run.",
            ],
          ],
          [
            "From base model to assistant",
            [
              "Pretraining produces a completion model, not a chatbot. Post-training begins only after the base checkpoint shows improving validation loss and coherent document continuations. SFT uses roughly 485K Smol-Smoltalk conversations and masks system and user tokens so the loss teaches assistant turns. DPO then learns chosen-over-rejected behavior from cleaned UltraFeedback pairs with a deliberately low learning rate and bounded sequence length.",
              "The online stage is kept conceptually honest. A separate reward model branches from the SFT checkpoint and learns pairwise preferences from HelpSteer2 using a Bradley–Terry objective. The RLOO policy begins from DPO, consults that independent reward model, keeps a frozen reference policy, and applies a KL penalty plus a small anti-degeneration reward. It refuses to start below a held-out reward-model accuracy threshold, and its 250-step default is a cautious experiment—not a claim that RL automatically improves the assistant.",
            ],
          ],
          [
            "Recovery and correctness",
            [
              "Long local runs fail for unglamorous reasons: the laptop sleeps, a download stops, the process receives Ctrl-C, or thermals force a restart. The project answers this with a four-shard, 20-step pilot that exercises the real tokenizer, model, data loader, validation schedule, and checkpoint path. A doctor command checks hardware, files, manifests, configuration consistency, and model shape before expensive work begins.",
              "Preprocessing records input fingerprints and skips completed shards safely. Training checkpoints are written atomically, the newest three rotate, and interruption requests a save after the current optimizer update. Resume restores model and optimizer state, precision scaler, RNG state, and the exact next data block. Tokenizer hashes, corpus identities, and configuration metadata travel with the run so an apparently convenient but incompatible resume becomes an explicit error.",
            ],
          ],
          [
            "Evaluation and honest limits",
            [
              "Evaluation changes with the stage. The pilot only needs finite loss and successful scheduled validation; meaningful prose is not expected after 20 updates. A real base model must show stable held-out loss, repeatable greedy completions, and recognizably coherent English before sampling or post-training is taken seriously. Assistant checkpoints should then be tested with the exact chat template, held-out conversations, preference accuracy, KL behavior, repetition, truncation, and qualitative review.",
              "The checked-in repository does not contain the 10B-token corpus, trained weights, TensorBoard history, or a completed quality report, so this article does not invent a final benchmark score. A 125M model will remain constrained in factual recall and multi-step reasoning even after good alignment. The byte tokenizer can encode Nepali today but inefficiently; meaningful Nepali adaptation would require curated data, vocabulary extension that preserves existing token IDs, continued pretraining, and a separate evaluation phase.",
            ],
          ],
        ],
        workflow: [
          "Download a bounded corpus and record immutable source revisions",
          "Train and freeze the 32K tokenizer before tokenizing production data",
          "Prepare deterministic train/validation shards and run the doctor checks",
          "Benchmark memory and throughput, then complete the real 20-step pilot",
          "Pretrain the base model with atomic, exactly resumable checkpoints",
          "Gate on base quality before SFT → DPO + reward model → RLOO",
          "Evaluate each stage independently and keep its artifacts separate",
        ],
        takeaway:
          "The lesson: on limited hardware, careful systems engineering matters as much as model architecture.",
        tags: ["PyTorch", "Tokenizer", "Pretraining", "SFT", "DPO", "RLHF"],
      },
      {
        title: "Engineering RAG that shows its evidence",
        category: "THE BUILD LOG / CITEMIND",
        intro:
          "How CiteMind connects research-paper retrieval, grounded answers, and the operational layer around them.",
        note: "September 2026 · 6 min read",
        heading: "A citation is part of the system design.",
        lead:
          "CiteMind-AI-RAGOps is a full-stack research assistant for PDFs, text, Markdown, web pages, and arXiv papers. It joins conditional LangGraph workflows with hybrid retrieval, neural reranking, evidence inspection, streaming chat, and a cloud-native operating layer.",
        sections: [
          [
            "The problem it solves",
            [
              "A typical RAG demo proves that a PDF can be uploaded and a model can produce an answer. It does not prove that the right passage was retrieved, that the answer stayed inside the evidence, or that a five-year-old scientific claim still reflects current literature. CiteMind starts from that gap: the user should be able to follow the path from question to retrieved passage to generated claim.",
              "The intended workflow is closer to a research desk than a generic chatbot. A researcher can load a paper, ask for a reviewer-style summary, inspect the supporting chunks, search beyond the local collection, and check whether newer work challenges a claim. Separate sessions preserve independent document memories, so a conversation about one paper does not quietly borrow context from another project.",
            ],
          ],
          [
            "Ingestion and session isolation",
            [
              "The ingestion surface supports PDFs, plain text, Markdown, web pages, and arXiv papers by identifier or title. FastAPI validates the request, PyMuPDF and LangChain loaders extract content, and the backend normalizes the result into chunks with source metadata before embedding. The same API exposes document lists and deletion paths, making ingestion a visible product feature rather than a hidden preprocessing script.",
              "Every session owns its messages, document inventory, research memory, and Qdrant collection namespace. That isolation matters for both correctness and user trust: retrieval should never mix the methods section of one uploaded paper with a similarly worded document from an unrelated conversation. Session endpoints let the React client create, reopen, inspect, and remove these workspaces explicitly.",
            ],
          ],
          [
            "Hybrid retrieval and reranking",
            [
              "Scientific retrieval needs two kinds of memory. Dense vectors are good at semantic equivalence—finding a passage about the same idea even when wording changes. Sparse BM25-style vectors preserve lexical signals such as model names, abbreviations, equations, dataset identifiers, and domain-specific phrases. CiteMind stores and queries both through Qdrant instead of assuming one representation wins everywhere.",
              "The first retrieval stage favors recall and returns a candidate pool. A Sentence Transformers cross-encoder then reads each query–passage pair jointly and produces a more expensive relevance score. Reranking only the candidate set makes that quality step affordable. The final context therefore reflects two retrieval signals plus a second-stage neural judgment, rather than raw nearest neighbors being sent directly to the language model.",
            ],
          ],
          [
            "Conditional research workflow",
            [
              "A single fixed chain is too rigid for research questions. LangGraph models the conversation as state and exposes conditional nodes for direct answering, local retrieval, web search, claim verification, query rewriting, and final generation. Stable general questions can avoid an unnecessary vector lookup; document questions enter the retrieval path; freshness-sensitive claims can search recent literature and arXiv-oriented results.",
              "The graph also makes failure recovery part of the design. When retrieved context is judged weak, a rewrite node can produce a better search query and repeat retrieval instead of manufacturing confidence from irrelevant chunks. Graph state is retained for inspection, which gives developers and users a concrete explanation of which path ran and what evidence reached the answer stage.",
            ],
          ],
          [
            "Product and evidence experience",
            [
              "The frontend is a React 19 and Vite application designed around the research loop: choose a session, attach sources, ask a question, read the answer, and inspect the evidence. React Markdown and KaTeX support technical writing, while Lucide icons and a dark research interface keep the information hierarchy clear. The user can see loaded documents and reopen prior research sessions rather than treating each refresh as a blank state.",
              "FastAPI streams generation over Server-Sent Events, so long local-model responses appear progressively without requiring a WebSocket control plane. Source inspection reveals the chunks behind an assistant turn, and graph-state inspection exposes workflow decisions. A /btw side channel provides a deliberate escape hatch for unrelated questions without writing them into the main research history.",
            ],
          ],
          [
            "Providers, deployment, and operations",
            [
              "The model layer is configurable rather than baked into the graph. Ollama supports a private local path, while OpenAI and Groq adapters offer hosted alternatives through environment settings. Docker Compose assembles the Nginx-hosted React frontend, FastAPI backend, Qdrant, Ollama, and a one-shot model-pull service. Volumes preserve Qdrant data, model files, sessions, checkpoints, and the embedding cache across container restarts.",
              "The cloud-native layer adds namespace-scoped Kubernetes resources, Deployments and Services, persistent volume claims, ConfigMap settings, ingress, health probes, and a backend HPA manifest. GitHub Actions validates the frontend build, Compose configuration, Docker images, and Kubernetes dry run. A Makefile turns common build, run, log, validation, and deployment operations into a consistent interface.",
            ],
          ],
          [
            "Evaluation and current boundaries",
            [
              "RAG quality cannot be inferred from a polished chat screen. The repository includes a golden set, a DeepEval-oriented evaluation command, and a smoke workflow covering document upload, retrieval, and chat. These tools create a repeatable place to measure answer and retrieval behavior as models, chunking, or reranking choices change.",
              "The operations layer is an explicit starting point rather than a finished production claim. Prometheus configuration and Grafana provisioning exist, alongside health checks and persistence, but the project report still calls out richer application metrics, alert rules, retrieval-latency dashboards, production secrets, and hardening as future work. Kubernetes YAML demonstrates a deployment design; it does not by itself prove reliability under real traffic.",
            ],
          ],
        ],
        workflow: [
          "Create an isolated research session and load a PDF, text, Markdown, URL, or arXiv source",
          "Extract, normalize, chunk, and attach source metadata to the document",
          "Write dense embeddings and sparse BM25-style vectors into the session’s Qdrant collection",
          "Route the question through direct answer, local retrieval, web search, verification, or rewrite",
          "Fuse candidate retrieval and apply cross-encoder reranking",
          "Generate a grounded response and stream it to the React client over SSE",
          "Expose source chunks and graph state so the result can be inspected",
        ],
        takeaway:
          "The lesson: trustworthy RAG is a chain of evidence, data, services, and observable decisions.",
        tags: ["RAG", "Qdrant", "LangGraph", "FastAPI", "Kubernetes", "Prometheus"],
      },
      {
        title: "Designing an AI debugger around human approval",
        category: "THE BUILD LOG / DEVPILOT",
        intro:
          "Why a useful coding agent needs bounded tools, reviewable changes, and proof that the fix actually works.",
        note: "September 2026 · 6 min read",
        heading: "A plausible patch is not a verified repair.",
        lead:
          "DevPilot is a single-operator debugging workbench for small Python repositories. An open-weight model may investigate and propose actions, but the application—not the model—owns authorization, isolation, test execution, verification, and the audit trail.",
        sections: [
          [
            "The product boundary",
            [
              "DevPilot is intentionally smaller than the phrase ‘AI software engineer’ suggests. It is a single-operator debugging workbench for small Python repositories with pytest suites. The product accepts an allowed repository and a concrete failure, investigates a sanitized disposable copy, and returns a patch plus evidence. The original repository is not the working directory.",
              "That boundary removes entire classes of accidental authority. There is no tool for cloning arbitrary GitHub repositories, pushing a branch, opening a pull request, merging, deploying, or executing a generic shell command. The useful output is a reviewable repair artifact, not a claim that an agent should own the software-delivery lifecycle.",
            ],
          ],
          [
            "Control plane and model loop",
            [
              "FastAPI is the control plane. It authenticates the browser, validates the selected repository and task, acquires the one-active-run slot, prepares the workspace, records the event stream, and exposes approval decisions and downloadable results. The UI shows investigation activity, tool output, pending approvals, measured run statistics, and final verification rather than collapsing everything into a chat transcript.",
              "The decision loop can use a deterministic scripted demo or an operator-configured Qwen checkpoint behind an OpenAI-compatible Ollama or vLLM endpoint. The adapter accepts structured tool calls and enforces maximum context, retries, steps, and elapsed time. The scripted path performs real tool, edit, diff, and pytest operations, but it is clearly labelled so a successful fixture replay is never presented as model intelligence.",
            ],
          ],
          [
            "MCP as a narrow tool layer",
            [
              "The model reaches the workspace through five MCP subprocess servers over stdio: bounded file tools, Git inspection, BM25 search across code and documentation, a fixed pytest interface, and read-only SQLite. An optional Docker observer adds operational context without turning Docker into a general execution surface. The implementation supports a documented MCP subset rather than claiming certification against every version of the protocol.",
              "Every proposed tool call crosses a gateway that checks the tool name, schema, path boundary, argument size, and current run state. Read and search results return bounded context with line references so the model can build an evidence trail without dumping an entire repository into its prompt. There is deliberately no unrestricted terminal function disguised as an MCP tool.",
            ],
          ],
          [
            "Human approval at the boundary",
            [
              "Inspection can proceed without interruption, but actions with side effects stop at an approval boundary. The operator sees the exact edit or test invocation rather than a vague ‘allow agent’ prompt. Approval creates a signed, single-use capability bound to the tool, normalized arguments, workspace hash, and expiration time.",
              "The tool boundary verifies that capability immediately before execution and consumes it once. A changed workspace, modified argument, replayed approval, or expired token fails. This is important because both model text and repository contents are untrusted: a prompt injection can request authority, but it cannot manufacture the application’s cryptographic approval state.",
            ],
          ],
          [
            "Isolated execution and verification",
            [
              "DevPilot offers four runner modes with deliberately different trust assumptions: disabled, trusted-host for bundled fixtures, a restricted local Docker container, or a Kubernetes Job in a separate runner namespace. Container and Job modes use a fixed pytest command, resource limits, no general command argument, and no model credential. The Kubernetes job receives a small immutable snapshot through a ConfigMap and no access to the application’s persistent volume.",
              "Verification is derived from the authoritative runner exit status and the identity of the exact approved snapshot. Text printed by the tests is not sufficient, and the model cannot set the verified flag by announcing success. A zero exit code only proves that the selected tests passed on that snapshot; it does not prove security or general correctness, so the final report preserves the scope of the evidence.",
            ],
          ],
          [
            "Evidence, operations, and observability",
            [
              "A completed run exports changes.patch, report.md, trace.json, and test evidence. SQLite keeps durable run history, while the browser can reopen prior activity and download artifacts for independent review. Operational metrics use bounded labels and exclude prompts, paths, task text, and tool arguments; detailed evidence stays in protected per-run records rather than becoming public telemetry.",
              "The delivery path uses separate non-root app and test-runner images, a guarded Helm chart, digest-based image promotion, and manually synchronized Argo CD deployment after the service is drained. Backup helpers exclude credentials and restore into a new directory. Prometheus tracks API, run, approval, model, and tool behavior; optional OpenTelemetry spans flow through a Collector to Tempo. None of those signals replaces the audit artifacts used for verification.",
            ],
          ],
          [
            "What was actually validated",
            [
              "Release 0.3.0 records 105 passing tests, two skips, and 79.02% main-process statement coverage. A real localhost FastAPI workflow authenticated, selected a fixture, paused for three approvals, ran actual before/after pytest, verified the resulting patch, and exported artifacts. Three scripted fixtures—Redis configuration, pagination, and username normalization—were replayed successfully with extra checks.",
              "The same validation report draws a firm line around what was not established. Docker images, a live Kubernetes cluster, real Helm and network-policy behavior, remote CI, registry scans, a live Qwen model, GPU latency, and production hardening were unavailable in that environment. The repository includes acceptance paths for those layers, but this blog keeps deployable source separate from executed evidence.",
            ],
          ],
        ],
        workflow: [
          "Authenticate the operator, validate the selected repository, and create a disposable workspace",
          "Collect bounded file, Git, documentation, and database evidence through MCP",
          "Pause for approval before the baseline pytest run",
          "Present the exact proposed patch and bind approval to its workspace hash",
          "Apply the approved edit only inside the disposable copy",
          "Run the approved post-edit test in the configured isolated runner",
          "Compute verification independently and export patch, report, trace, and test evidence",
        ],
        takeaway:
          "The lesson: capable agents become safer when authority is narrow and evidence is independently produced.",
        tags: ["Qwen", "MCP", "FastAPI", "Approvals", "Isolated tests", "OpenTelemetry"],
      },
      {
        title: "Publishing trustworthy data before answering with it",
        category: "THE BUILD LOG / VERITYLAKE",
        intro:
          "How VerityLake turns a web crawl into a governed, reversible RAG release with traceable evidence at every layer.",
        note: "September 2026 · 7 min read",
        heading: "A healthy API does not guarantee healthy data.",
        lead:
          "VerityLake is a local-first data-to-RAG platform built around one principle: an AI application should not answer from a candidate dataset until the data, vector index, model identity, lineage, and release manifest have passed explicit publication gates.",
        sections: [
          [
            "The failure hidden behind fluent answers",
            [
              "A RAG endpoint can return polished prose while its upstream system is incomplete or inconsistent. A crawler may miss pages, normalization may duplicate documents, an embedding model may change without rebuilding the index, or a failed run may leave half of a candidate dataset visible. Traditional liveness checks do not catch those data-contract failures.",
              "VerityLake treats publication—not ingestion—as the moment that matters. Each pipeline execution builds an isolated candidate with its own raw evidence, Delta table versions, quality reports, Chroma collection, embedding identity, catalog, and release manifest. Until every gate passes, the previously active release remains the only dataset available to users.",
            ],
          ],
          [
            "From permitted crawl to Bronze",
            [
              "The default domain is a deliberately modest public book-catalog sandbox. An HTTPX and BeautifulSoup crawler respects robots rules, limits paths and document counts, rejects private targets and cross-origin redirects, bounds response size and retries, and records fetch errors instead of hiding them. Raw HTML bytes, normalized text, source URL, timestamps, and content hashes are written to MinIO through its S3-compatible API.",
              "Bronze converts the accepted crawl records into a typed Delta table while preserving their source identity. The raw layer remains available beside it, so an operator can move backward from a structured record to the actual bytes that produced it. The run stores frozen public configuration and a fingerprint; changing configuration inside the same run is rejected rather than silently mixing assumptions.",
            ],
          ],
          [
            "Silver, Gold, and quality gates",
            [
              "Silver is where data becomes dependable enough for downstream work. DuckDB applies deterministic normalization and deduplication, rejected records go to quarantine, and a quality report checks the accepted document count, schema, nulls, duplicates, and content expectations. A failed report stops the run but keeps its diagnostics for inspection.",
              "Gold transforms validated documents into traceable chunks. Every chunk keeps a content-derived identifier, source URL, document identity, and character offsets into normalized Silver text. A second report validates chunk coverage and structure. Delta Lake supplies transaction logs and exact table versions, so a release can point to immutable Bronze, Silver, and Gold snapshots instead of an ambiguous ‘latest’ folder.",
            ],
          ],
          [
            "Embedding and retrieval integrity",
            [
              "Ollama serves nomic-embed-text:v1.5 locally. The embedding cache keys include both content and model identity, preventing vectors from one model revision being reused as if they belonged to another. Gold chunks are written to a run-specific Chroma collection rather than mutating the active index in place.",
              "Before publication, the platform verifies that vector count matches Gold row count, dimensions are consistent, the collection is still present, and a self-retrieval probe can recover sampled chunks. Self-retrieval does not prove semantic answer quality, but it does catch broken index writes and identity mismatches that ordinary API health checks miss.",
            ],
          ],
          [
            "Atomic publication and rollback",
            [
              "A release manifest binds exact Delta versions, the run-specific vector collection, all quality reports, a real DuckDB catalog, embedding tag and digest, source configuration, configuration fingerprint, and Git SHA. Release manifests are immutable. Immediately before publishing, VerityLake checks vector count again and refuses model drift.",
              "Visibility changes through one conditional write to catalog/active.json. Compare-and-swap uses the active object’s prior ETag, so two runs cannot unknowingly overwrite each other. Publication intent is durable before that switch, retries are idempotent, and rollback can select only a previously validated release whose vectors and embedding identity are still available. A failed candidate therefore leaves the last known-good release untouched.",
            ],
          ],
          [
            "The governed answer path",
            [
              "FastAPI separates liveness from readiness. The process may be alive while /readyz correctly reports that no publishable dataset exists. Once ready, an authenticated question retrieves a bounded number of passages only from the active Chroma collection, then asks a local Qwen3 4B model through Ollama to answer with inline source identifiers.",
              "The response layer validates that cited IDs exist, returns exact evidence quotes with URLs and chunk offsets, and can abstain when retrieval or citation checks are insufficient. The model receives no tools and cannot choose another release. A valid quote proves provenance, not universal factual correctness, so the API returns release ID, model identity, sources, status, and reason for the caller to inspect.",
            ],
          ],
          [
            "Orchestration, evidence, and honest validation",
            [
              "Airflow runs initialize → scrape → bronze → silver → gold → embed → publish, passing only a run ID through XCom instead of HTML, vectors, or secrets. OpenLineage-style start, complete, and failure events are preserved in object storage. Prometheus, Grafana, structured logs, a DuckDB catalog, cold backup/restore, CI security checks, signed-image workflows, and an optional Terraform AWS path surround the core pipeline.",
              "The recorded validation is unusually concrete: 108 deterministic tests passed; the containerized Airflow DAG completed all seven tasks; MinIO contained 340 objects; the active release exposed 113 vectors; health and readiness passed; and a real price question returned an answer with marker [S1], an exact quote, and its source URL. Service-gated modules, GPU support, generic arbitrary-site compatibility, and production scale remain outside those claims.",
            ],
          ],
        ],
        workflow: [
          "Create a run with frozen public configuration and the current active-release ETag",
          "Crawl a permitted source and preserve raw bytes, text, robots decisions, and errors",
          "Write typed Bronze Delta data, then normalize, deduplicate, report, and quarantine in Silver",
          "Create traceable Gold chunks with source identity and normalized-text offsets",
          "Embed locally, populate a run-specific Chroma collection, and run integrity probes",
          "Build the catalog and immutable release manifest, then pass every publication gate",
          "Atomically switch active.json—or leave the previous release active when anything fails",
        ],
        takeaway:
          "The lesson: trustworthy RAG starts before retrieval—with versioned data, explicit gates, atomic publication, and evidence that survives every transformation.",
        tags: ["Airflow", "Delta Lake", "DuckDB", "MinIO", "Chroma", "Ollama", "FastAPI"],
      },
    ],
    cases: [
      {
        title: "CiteMind-AI-RAGOps",
        category: "RETRIEVAL & AI OPERATIONS",
        intro:
          "Research-paper intelligence with a traceable path from question to source.",
        problem:
          "Research answers need more than fluent text. CiteMind brings document retrieval, source-grounded responses, and operational visibility into one full-stack platform.",
        steps: [
          ["Retrieve", "Hybrid search over research papers with Qdrant."],
          ["Refine", "Cross-encoder reranking and LangGraph orchestration."],
          ["Respond", "Source-grounded chat through React and FastAPI."],
        ],
        approach:
          "Containerized services, Kubernetes deployment configuration, and Prometheus monitoring connect the retrieval workflow to an inspectable operations layer.",
        note: "Source-grounded RAG · Hybrid retrieval · Observability",
      },
      {
        title: "DevPilot",
        category: "AGENTIC AI & DEVELOPER TOOLS",
        intro:
          "A debugging workbench that keeps a human in control of the repair.",
        problem:
          "Repository debugging needs context, precise changes, and verification. DevPilot uses open-weight language models to investigate failures and propose reviewable repairs.",
        steps: [
          ["Investigate", "MCP tools gather repository and failure context."],
          ["Approve", "Exact proposed edits pass through human approval."],
          ["Verify", "Isolated test runs produce auditable repair artifacts."],
        ],
        approach:
          "Approval gates and isolated execution make agent actions inspectable. FastAPI, container infrastructure, and OpenTelemetry support the workbench around the model.",
        note: "Human-in-the-loop · MCP · Auditable execution",
      },
      {
        title: "VerityLake",
        category: "DATA ENGINEERING & GOVERNED RAG",
        intro: "From raw data to answers, with evidence at every release.",
        problem:
          "A RAG answer is only as trustworthy as its data lineage. VerityLake connects ingestion, data quality, snapshots, vector indexes, and citation evidence in a local-first platform.",
        steps: [
          ["Prepare", "Ingest and validate data through staged pipelines."],
          ["Publish", "Bind Delta snapshots, indexes, and model identity."],
          ["Trace", "Inspect citation evidence and roll back releases."],
        ],
        approach:
          "Quality-gated publishing and reversible releases treat data and retrieval as one governed system, built with Airflow, DuckDB, Delta Lake, Chroma, and Ollama.",
        note: "Data lineage · Quality gates · Reproducible releases",
      },
    ],
    archive: {
      title: "Applied AI, end to end.",
      intro:
        "Selected systems across healthcare, multilingual speech, and financial document intelligence.",
      note: "From data and models to usable applications",
      heading: "More selected work",
      visionTitle: "Seeing beyond the pixels.",
      visionIntro:
        "Computer vision projects connecting model evaluation with web and mobile experiences.",
      visionNote: "Classification · Detection · Real-time inference",
      visionHeading: "Vision & multimodal applications",
      items: [
        [
          "MediPredict",
          "HEALTHCARE / FULL-STACK ML",
          "A disease prediction platform with 9 workflows, ensemble tabular models, CNN image inference, OCR-assisted forms, and prediction history. React, FastAPI, XGBoost and MobileNetV2.",
        ],
        [
          "LinguaVoice",
          "MULTILINGUAL SPEECH",
          "A five-language STT and TTS platform with browser recording, voice controls, training pipelines, and WER/CER evaluation. Whisper, XTTS-v2, MMS and Docker.",
        ],
        [
          "Financial Document Intelligence",
          "MULTIMODAL RETRIEVAL",
          "Extracts text, tables, and images from financial PDFs. Combines BM25 and FAISS retrieval with BLIP image captions in a Streamlit application.",
        ],
        [
          "MonumentAI",
          "LANDMARK RECOGNITION",
          "ResNet50 transfer learning across 7 monument classes, with 98.72% validation accuracy. Includes ranked predictions, historical context, maps, and Dockerized APIs.",
        ],
        [
          "AI Online Proctoring",
          "REAL-TIME COMPUTER VISION",
          "A seven-module exam-monitoring pipeline covering detection, identity and spoof verification, gaze, mouth movement, and head pose. Optimized for lower-end hardware.",
        ],
        [
          "BrainCognize",
          "MEDICAL IMAGING / MOBILE",
          "A four-class MRI classifier using 7,023 images. Compared a custom CNN (97% reported accuracy) with VGG-16, delivered through Flutter and a Django API.",
        ],
      ],
    },
    skills: {
      title: "Depth in models. Breadth in systems.",
      intro:
        "A practical toolkit for building, evaluating, and operating AI applications across the full delivery cycle.",
      note: "Speech AI · LLMs · RAGOps · Data engineering",
      heading: "Technical expertise",
      groups: [
        "AI & model development",
        "Language & retrieval",
        "Data engineering",
        "Software & operations",
      ],
      practice: "Engineering priorities",
      practiceBody:
        "Ground answers in evidence. Measure model behavior. Make data pipelines reliable. Keep deployments observable and changes reviewable.",
    },
    contact: {
      title: "Let’s build something meaningful.",
      intro:
        "Open to conversations about AI engineering, research collaboration, and thoughtful technical challenges.",
      note: "Based in Kathmandu, Nepal",
      heading: "A conversation starts here.",
      body: "Working on speech, language, vision, or the systems around a model? I would be glad to hear what you are building.",
    },
  },
  de: {
    ui: {
      skip: "Zum Inhalt",
      portfolio: "KI-ENTWICKLUNG / PORTFOLIO",
      cv: "Lebenslauf (Deutsch)",
      edition: "DIE BERUFLICHE EDITION",
      location: "Kathmandu, Nepal",
      previous: "Zurück",
      next: "Weiter",
      page: "Seite",
      footer: "Forschung verstehen. Systeme entwickeln.",
      language: "Sprache",
      chapters: "Kapitel",
      copy: "E-Mail kopieren",
      copied: "E-Mail kopiert",
      copyFailed: "Bitte den E-Mail-Link oben verwenden.",
      repo: "Repository ansehen",
      credentials: "Stipendien & Zertifikate",
      approach: "Technischer Ansatz",
      system: "Das System im Detail",
      stack: "Technologien",
      contact: "Kontakt aufnehmen",
      email: "E-Mail",
      profile: "Berufliches Profil",
      code: "Code & Projekte",
      download: "Lebenslauf herunterladen (Deutsch)",
      portrait: "Porträt von Punam Adhikari",
      blog: "Blog",
      blogCollection: "Projektnotizen",
      blogIntro: "Vier ausführliche Entwicklungsgeschichten über Modelltraining, vertrauenswürdige Suche, Coding-Agenten und kontrollierte Data-to-RAG-Systeme.",
      readArticle: "Artikel lesen",
      backToBlogs: "Alle Beiträge",
      closeBlog: "Blog schließen",
      atGlance: "Projekt auf einen Blick",
      architecture: "Systemarchitektur",
      architectureNote: "Der Ablauf ist von links nach rechts zu lesen.",
      deepDive: "Technische Details",
      byline: "Von Punam Adhikari",
      onThisPage: "In diesem Artikel",
      buildFlow: "Der Entwicklungsablauf",
      chapter: "Kapitel",
      of: "von",
      case: "Ausgewähltes Projekt",
      focus: "Schwerpunkte",
      swipeSections: "Wischen →",
    },
    chapters: [
      "Über mich",
      "Berufserfahrung",
      "Ausbildung",
      "Projekte",
      "Fachkenntnisse",
      "Kontakt",
    ],
    pageTitles: [
      "Über mich",
      "Berufserfahrung",
      "Abacus Insights",
      "Danson Solutions",
      "Ausbildung",
      "AI/ML · LLM & RAG I",
      "AI/ML · LLM & RAG II",
      "Data Engineering I",
      "Data Engineering II",
      "Fachkenntnisse",
      "Kontakt",
    ],
    about: {
      role: "AI/ML & Data Engineer",
      eyebrow: "01 / EINE PERSÖNLICHE VORSTELLUNG",
      title: "KI-Forschung, produktionsreif umgesetzt.",
      lead: "Ich bin Punam, KI-Ingenieurin mit Fokus auf zuverlässige Machine-Learning-Systeme – von der Modellentwicklung bis zum produktiven Deployment.",
      body: [
        "Mein Hintergrund im Computer Engineering umfasst Spracherkennung, Fine-Tuning großer Sprachmodelle, Computer Vision und Datenplattformen.",
        "Ich arbeite über den gesamten Engineering-Lebenszyklus hinweg: von Experimentdesign und Modellevaluation bis zu skalierbaren Pipelines, APIs, Deployment und Performance-Optimierung.",
      ],
      strengths: [
        ["Angewandte KI", "LLMs, RAG & multimodale Systeme"],
        ["ML Engineering", "Evaluation, APIs & Bereitstellung"],
        ["Datensysteme", "ETL, Spark & Cloud-Pipelines"],
        ["Computer Vision", "Erkennung & Deep Learning"],
      ],
      metrics: [
        "Erreichte Wortfehlerrate beim Fine-Tuning koreanischer ASR-Modelle",
        "Sprachen in der Sprachplattform LinguaVoice",
      ],
      caption: "KI-Forschung trifft Entwicklung",
      current: "KI-Forschungsingenieurin",
    },
    experience: {
      title: "Von der Forschung in die Praxis.",
      intro:
        "Angewandte KI und Softwareentwicklung mit Erfahrung in Sprachsystemen, Gesundheitsdaten und Entwicklungswerkzeugen.",
      note: "Modellentwicklung · Evaluation · Bereitstellung",
      heading: "Berufserfahrung",
      jobs: [
        [
          "Okt. 2025 – heute",
          "KI-Forschungsingenieurin",
          "NSDevil",
          "Whisper, NeMo und Conformer für koreanische Spracherkennung angepasst und eine Wortfehlerrate unter 10 % erreicht; koreanische Sprachsynthese mit ESPnet entwickelt. Erklärbare Aufsatzbewertung und multimodale RAG umgesetzt. HyperCLOVAX 3B/14B mit SFT, DPO, LoRA und QLoRA angepasst und auf entfernten GPUs bereitgestellt.",
        ],
        [
          "Apr. 2025 – Okt. 2025",
          "Softwareentwicklerin I",
          "Techkraft Inc. · Abacus Insights",
          "NLP zur Datenextraktion aus PDFs im US-Gesundheitswesen eingesetzt. Zuverlässige Datenpipelines mit Databricks, Snowflake, Python, PySpark und SQL entwickelt und gepflegt.",
        ],
        [
          "Nov. 2024 – Apr. 2025",
          "Forschungspraktikantin KI/ML",
          "Danson Solutions",
          "Eine PHP-zu-Java-Übersetzungspipeline mit Meta-LLaMA und GPT-3.5 Turbo entwickelt. Modelle zur Codegenerierung angepasst und evaluiert sowie Refactoring mit Embeddings und syntaktischer Analyse untersucht.",
        ],
      ],
    },
    education: {
      title: "Eine Grundlage für lebenslanges Lernen.",
      intro:
        "Ein Studium des Computer Engineering, ergänzt durch vertiefende Weiterbildung in maschinellem Lernen, Computer Vision und Datenplattformen.",
      note: "Pulchowk Engineering Campus / 2021–2025",
      heading: "Ausbildung & Weiterbildung",
      degree: "Bachelor in Computer Engineering",
      school: "Pulchowk Engineering Campus",
      credentialNotes: [
        "Ausgewählte Stipendiatin",
        "Internationales Sommerpraktikum",
        "Andrew Ng · Coursera",
        "Data Engineering",
        "Data Engineering",
        "Fortgeschrittene SQL-Kenntnisse",
      ],
    },
    blogs: [
      {
        title: "Ein Sprachmodell auf einer Laptop-GPU entwickeln",
        category: "ENTWICKLUNGSTAGEBUCH / LLM120",
        intro:
          "Wie aus zufälligen Gewichten auf einer GPU mit 8 GB ein kleines englisches Modell samt Assistent entsteht.",
        note: "September 2026 · 6 Min. Lesezeit",
        heading: "Kleine Hardware verändert jede Entscheidung.",
        lead:
          "LLM120 ist mein durchgängiges Experiment: ein Decoder-Modell von Grund auf trainieren – einschließlich Tokenizer, Pretraining, Evaluation und Post-Training.",
        sections: [
          [
            "Mit der Begrenzung beginnen",
            "Ziel ist ein Modell mit rund 125 Millionen Parametern für eine RTX-5050-Laptop-GPU. Ein 32K-Byte-Level-BPE, Grouped-Query Attention, BF16, Activation Checkpointing und Memory-Mapped-Daten halten den Lauf realistisch.",
          ],
          [
            "Training wiederaufnehmbar machen",
            "Lange Laptop-Läufe scheitern oft an Unterbrechungen, Hitze oder Downloads. Neustartbare Vorverarbeitung, atomare Checkpoints, Datenidentitäten sowie die exakte Wiederherstellung von Optimierer und Zufallszustand machen Fehler beherrschbar.",
          ],
          [
            "Den Assistenten erst verdienen",
            "Zuerst muss das Basismodell sinkenden Validierungsverlust und verständliche Fortsetzungen zeigen. Erst danach folgen SFT, DPO, ein separates Reward-Modell und vorsichtiges Online-RLHF.",
          ],
        ],
        takeaway:
          "Die Erkenntnis: Bei begrenzter Hardware zählt sorgfältiges Systems Engineering ebenso wie die Modellarchitektur.",
        tags: ["PyTorch", "Tokenizer", "Pretraining", "SFT", "DPO", "RLHF"],
      },
      {
        title: "RAG entwickeln, das seine Belege zeigt",
        category: "ENTWICKLUNGSTAGEBUCH / CITEMIND",
        intro:
          "Wie CiteMind Recherche, quellenbasierte Antworten und die operative Ebene miteinander verbindet.",
        note: "September 2026 · 5 Min. Lesezeit",
        heading: "Eine Quellenangabe ist Teil des Systemdesigns.",
        lead:
          "CiteMind-AI-RAGOps begann als Forschungsassistent und wurde zu einer produktionsnahen Plattform, in der Retrieval-Qualität und Betriebsfähigkeit gemeinsam gedacht werden.",
        sections: [
          [
            "Suchen, dann verfeinern",
            "Forschungspapiere werden in Qdrant indexiert und mit dichten und spärlichen Signalen gesucht. Ein Cross-Encoder ordnet Kandidaten neu, bevor LangGraph den quellenbasierten Antwortpfad zusammenstellt.",
          ],
          [
            "Die Quelle sichtbar halten",
            "Die React- und FastAPI-Anwendung verbindet Antworten mit den unterstützenden Dokumenten. Dieser überprüfbare Pfad ist besonders bei wissenschaftlichen Aussagen wichtiger als flüssiger Text allein.",
          ],
          [
            "Die gesamte Pipeline betreiben",
            "Docker Compose, Kubernetes, Health-Probes, persistenter Speicher, CI, Prometheus und Grafana machen Fehler über den Modellaufruf hinaus sichtbar.",
          ],
        ],
        takeaway:
          "Die Erkenntnis: Vertrauenswürdiges RAG ist eine Kette aus Belegen, Daten, Diensten und beobachtbaren Entscheidungen.",
        tags: ["RAG", "Qdrant", "LangGraph", "FastAPI", "Kubernetes", "Prometheus"],
      },
      {
        title: "Einen KI-Debugger mit menschlicher Freigabe gestalten",
        category: "ENTWICKLUNGSTAGEBUCH / DEVPILOT",
        intro:
          "Warum ein nützlicher Coding-Agent begrenzte Werkzeuge, prüfbare Änderungen und einen echten Wirksamkeitsnachweis braucht.",
        note: "September 2026 · 6 Min. Lesezeit",
        heading: "Ein plausibler Patch ist noch keine geprüfte Reparatur.",
        lead:
          "DevPilot ist eine Debugging-Umgebung mit Open-Weight-LLM, die Untersuchung, Autorisierung, Ausführung und Verifikation bewusst trennt.",
        sections: [
          [
            "In einer Wegwerfkopie untersuchen",
            "MCP-Werkzeuge sammeln Code-, Git-, Dokumentations-, Test- und Datenbankkontext in einem isolierten Arbeitsbereich. Das Original-Repository ist niemals das Arbeitsverzeichnis des Agenten.",
          ],
          [
            "Freigabe an der Grenze erzwingen",
            "Exakte Änderungen und Testläufe benötigen eine signierte Einmalfreigabe, die an Werkzeugargumente und Workspace-Hash gebunden ist. Diese Regel wird im Code durchgesetzt.",
          ],
          [
            "Beweise aus Tests ableiten",
            "Die Verifikation entsteht aus isolierten Testergebnissen und der Snapshot-Identität – nicht aus der Erfolgsbehauptung des Modells. Patch, Bericht und Ablauf bleiben unabhängig prüfbar.",
          ],
        ],
        takeaway:
          "Die Erkenntnis: Agenten werden sicherer, wenn ihre Autorität eng begrenzt ist und Belege unabhängig entstehen.",
        tags: ["Qwen", "MCP", "FastAPI", "Freigaben", "Isolierte Tests", "OpenTelemetry"],
      },
    ],
    cases: [
      {
        title: "CiteMind-AI-RAGOps",
        category: "INFORMATIONSSUCHE & KI-BETRIEB",
        intro:
          "Wissenschaftliche Dokumente erschließen, mit nachvollziehbaren Quellen für jede Antwort.",
        problem:
          "Gute Forschungsantworten brauchen mehr als flüssigen Text. CiteMind vereint Dokumentensuche, quellenbasierte Antworten und Einblicke in den Betrieb in einer Full-Stack-Plattform.",
        steps: [
          [
            "Suchen",
            "Hybride Suche in wissenschaftlichen Dokumenten mit Qdrant.",
          ],
          [
            "Verfeinern",
            "Cross-Encoder-Reranking und Orchestrierung mit LangGraph.",
          ],
          ["Antworten", "Quellenbasierter Chat über React und FastAPI."],
        ],
        approach:
          "Containerisierte Dienste, Kubernetes-Konfiguration und Prometheus-Monitoring verbinden die Informationssuche mit einem nachvollziehbaren Systembetrieb.",
        note: "Quellenbasierte RAG · Hybride Suche · Beobachtbarkeit",
      },
      {
        title: "DevPilot",
        category: "KI-AGENTEN & ENTWICKLUNGSWERKZEUGE",
        intro:
          "Eine Debugging-Umgebung, in der Menschen die Kontrolle über Änderungen behalten.",
        problem:
          "Die Fehlersuche in Repositories erfordert Kontext, präzise Änderungen und Verifikation. DevPilot nutzt Sprachmodelle mit offenen Gewichten, um Fehler zu untersuchen und prüfbare Korrekturen vorzuschlagen.",
        steps: [
          [
            "Untersuchen",
            "MCP-Werkzeuge erfassen Repository- und Fehlerkontext.",
          ],
          [
            "Freigeben",
            "Konkrete Änderungsvorschläge werden von Menschen geprüft.",
          ],
          [
            "Verifizieren",
            "Isolierte Testläufe erzeugen nachvollziehbare Reparaturartefakte.",
          ],
        ],
        approach:
          "Freigabeschritte und isolierte Ausführung machen Agentenaktionen prüfbar. FastAPI, Container-Infrastruktur und OpenTelemetry ergänzen die Umgebung rund um das Modell.",
        note: "Menschliche Kontrolle · MCP · Prüffähige Ausführung",
      },
      {
        title: "VerityLake",
        category: "DATA ENGINEERING & RAG-GOVERNANCE",
        intro:
          "Von Rohdaten zu Antworten, mit nachvollziehbaren Belegen für jede Veröffentlichung.",
        problem:
          "Die Vertrauenswürdigkeit einer RAG-Antwort beginnt bei der Datenherkunft. VerityLake verbindet Datenaufnahme, Qualitätskontrollen, Snapshots, Vektorindizes und Quellenbelege in einer lokal betriebenen Plattform.",
        steps: [
          [
            "Vorbereiten",
            "Daten durch mehrstufige Pipelines aufnehmen und validieren.",
          ],
          [
            "Veröffentlichen",
            "Delta-Snapshots, Indizes und Modellidentität verknüpfen.",
          ],
          ["Nachverfolgen", "Quellenbelege prüfen und Releases zurücksetzen."],
        ],
        approach:
          "Qualitätsprüfungen vor der Veröffentlichung und rücksetzbare Releases verbinden Daten und Retrieval in einem kontrollierten System mit Airflow, DuckDB, Delta Lake, Chroma und Ollama.",
        note: "Datenherkunft · Qualitätsprüfungen · Reproduzierbare Releases",
      },
    ],
    archive: {
      title: "Angewandte KI, durchgängig entwickelt.",
      intro:
        "Ausgewählte Systeme für Gesundheitsanwendungen, mehrsprachige Sprachverarbeitung und Finanzdokumente.",
      note: "Von Daten und Modellen zu nutzbaren Anwendungen",
      heading: "Weitere ausgewählte Projekte",
      visionTitle: "Mehr erkennen als nur Pixel.",
      visionIntro:
        "Computer-Vision-Projekte, die Modellevaluation mit Web- und Mobilanwendungen verbinden.",
      visionNote: "Klassifikation · Erkennung · Echtzeitinferenz",
      visionHeading: "Bildverarbeitung & multimodale Anwendungen",
      items: [
        [
          "MediPredict",
          "GESUNDHEIT / FULL-STACK-ML",
          "Plattform zur Krankheitsvorhersage mit 9 Abläufen, Ensemble-Modellen, CNN-Bildanalyse, OCR-gestützten Formularen und Vorhersagehistorie. React, FastAPI, XGBoost und MobileNetV2.",
        ],
        [
          "LinguaVoice",
          "MEHRSPRACHIGE SPRACHVERARBEITUNG",
          "Spracherkennung und -synthese für fünf Sprachen, mit Browseraufnahme, Stimmensteuerung, Trainingspipelines und WER/CER-Evaluation. Whisper, XTTS-v2, MMS und Docker.",
        ],
        [
          "Financial Document Intelligence",
          "MULTIMODALE INFORMATIONSSUCHE",
          "Extrahiert Text, Tabellen und Bilder aus Finanz-PDFs. Kombiniert BM25- und FAISS-Retrieval mit BLIP-Bildbeschreibungen in einer Streamlit-Anwendung.",
        ],
        [
          "MonumentAI",
          "SEHENSWÜRDIGKEITENERKENNUNG",
          "ResNet50-Transferlernen für 7 Denkmal-Klassen mit 98,72 % Validierungsgenauigkeit. Mit sortierten Vorhersagen, historischem Kontext, Karten und Docker-APIs.",
        ],
        [
          "AI Online Proctoring",
          "COMPUTER VISION IN ECHTZEIT",
          "Prüfungsüberwachung mit sieben Modulen für Objekt-, Identitäts- und Täuschungserkennung sowie Blickrichtung, Mundbewegung und Kopfhaltung. Für leistungsschwächere Hardware optimiert.",
        ],
        [
          "BrainCognize",
          "MEDIZINISCHE BILDGEBUNG / MOBIL",
          "MRT-Klassifikation mit vier Klassen und 7.023 Bildern. Vergleich eines eigenen CNN (97 % berichtete Genauigkeit) mit VGG-16, bereitgestellt über Flutter und eine Django-API.",
        ],
      ],
    },
    skills: {
      title: "Modelle verstehen. Systeme gestalten.",
      intro:
        "Ein praxisorientiertes Werkzeugset für Entwicklung, Evaluation und Betrieb von KI-Anwendungen über den gesamten Lebenszyklus.",
      note: "Sprach-KI · LLMs · RAGOps · Data Engineering",
      heading: "Technische Fachkenntnisse",
      groups: [
        "KI & Modellentwicklung",
        "Sprache & Informationssuche",
        "Data Engineering",
        "Software & Betrieb",
      ],
      practice: "Technische Leitlinien",
      practiceBody:
        "Antworten auf Belege stützen. Modellverhalten messen. Datenpipelines zuverlässig gestalten. Bereitstellungen beobachtbar und Änderungen prüfbar halten.",
    },
    contact: {
      title: "Gemeinsam etwas Sinnvolles entwickeln.",
      intro:
        "Offen für Gespräche über KI-Entwicklung, Forschungskooperationen und anspruchsvolle technische Aufgaben.",
      note: "Standort: Kathmandu, Nepal",
      heading: "Hier beginnt ein Gespräch.",
      body: "Sie arbeiten an Sprache, Bildverarbeitung oder der Infrastruktur rund um ein Modell? Ich freue mich darauf, mehr über Ihr Vorhaben zu erfahren.",
    },
  },
};

const routes = [
  "about",
  "experience",
  "abacus-insights",
  "danson-solutions",
  "education",
  "ai-ml-llm-rag-1",
  "ai-ml-llm-rag-2",
  "data-engineering-projects",
  "adventureworks-data-engineering",
  "expertise",
  "contact",
];
const chapterStarts = [0, 1, 4, 5, 9, 10];
const stacks = [
  [
    "React",
    "FastAPI",
    "LangGraph",
    "LangChain",
    "Qdrant",
    "Ollama",
    "Docker",
    "Kubernetes",
    "Prometheus",
  ],
  ["Qwen", "MCP", "FastAPI", "Docker", "Kubernetes", "OpenTelemetry"],
  ["Airflow", "DuckDB", "Delta Lake", "Chroma", "Ollama", "FastAPI"],
];
const blogTechnical = [
  {
    facts: [
      ["125,077,824", "parameters in the default model"],
      ["10B", "planned pretraining-token budget"],
      ["8 GB", "target laptop GPU memory"],
      ["2,048", "tokens per training sequence"],
    ],
    architecture: [
      ["01", "Parquet corpus", "SmolLM2 mixture · deterministic split"],
      ["02", "Tokenizer", "32K byte-level BPE · chat template"],
      ["03", "Base model", "30-layer causal GQA Transformer"],
      ["04", "SFT", "Assistant-only supervised loss"],
      ["05", "Preference", "DPO policy + separate reward model"],
      ["06", "Assistant", "KL-constrained RLOO · chat CLI"],
    ],
    architectureCaption:
      "Artifacts remain separate at every stage. The reward model branches from SFT; the online policy starts from DPO and consumes that independent reward model.",
  },
  {
    facts: [
      ["5", "supported source types"],
      ["2-stage", "hybrid retrieval plus reranking"],
      ["SSE", "streaming answer transport"],
      ["3", "configurable LLM providers"],
    ],
    architecture: [
      ["01", "Research sources", "PDF · text · Markdown · URL · arXiv"],
      ["02", "FastAPI ingestion", "Load · normalize · chunk · isolate session"],
      ["03", "LangGraph router", "Retrieve · verify · search · rewrite"],
      ["04", "Qdrant", "Dense + sparse BM25-style candidates"],
      ["05", "Cross-encoder", "Neural query–passage reranking"],
      ["06", "Evidence UI", "Grounded SSE answer · sources · graph state"],
    ],
    architectureCaption:
      "The answer path is conditional rather than a single chain. Docker/Kubernetes run the frontend, backend, Qdrant, and model runtime; Prometheus and Grafana form the operations plane.",
  },
  {
    facts: [
      ["105", "tests passing in release 0.3.0"],
      ["5", "bounded MCP subprocess servers"],
      ["1", "intentional active-run limit"],
      ["3/3", "scripted fixtures resolved"],
    ],
    architecture: [
      ["01", "Operator + API", "Authenticate · choose repo · define task"],
      ["02", "Disposable workspace", "Sanitized copy · original untouched"],
      ["03", "Model loop", "Qwen/demo · structured tool proposals"],
      ["04", "MCP policy gateway", "Allowlist · validate · bound context"],
      ["05", "Human approval", "Signed capability for exact edit or test"],
      ["06", "Isolated proof", "Fixed pytest runner · patch · report · trace"],
    ],
    architectureCaption:
      "Authority narrows at every boundary. Verification is computed from the approved snapshot and runner exit status, while SQLite and exported artifacts preserve the audit trail.",
  },
  {
    facts: [
      ["108", "deterministic tests passing"],
      ["7", "successful Airflow DAG tasks"],
      ["113", "vectors in the validated release"],
      ["340", "objects preserved in MinIO"],
    ],
    architecture: [
      ["01", "Governed crawl", "Robots-aware HTTPX · raw evidence"],
      ["02", "Lakehouse", "Bronze → Silver → Gold Delta snapshots"],
      ["03", "Quality gates", "DuckDB dedup · reports · quarantine"],
      ["04", "Retrieval build", "Ollama embeddings · Chroma candidate"],
      ["05", "Atomic release", "Immutable manifest · CAS active pointer"],
      ["06", "Evidence answer", "FastAPI · Qwen3 · citations · abstention"],
    ],
    architectureCaption:
      "Airflow orchestrates the candidate pipeline while MinIO retains raw data, Delta versions, quality, lineage, catalogs, and releases. Only the active.json compare-and-swap makes a validated candidate queryable.",
  },
];

function initStandaloneBlogPage(root) {
  const slugs = ["llm120", "citemind", "devpilot", "veritylake"];
  const html = (value) =>
    String(value).replace(
      /[&<>"']/g,
      (character) =>
        ({ "&": "&amp;", "<": "&lt;", ">": "&gt;", '"': "&quot;", "'": "&#39;" })[
          character
        ],
    );
  const arrow =
    '<svg aria-hidden="true" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><path d="M7 7h10v10"/><path d="M7 17 17 7"/></svg>';
  const themeIcons = {
    moon: '<svg aria-hidden="true" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><path d="M12 3a6 6 0 0 0 9 9 9 9 0 1 1-9-9"/></svg>',
    sun: '<svg aria-hidden="true" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><circle cx="12" cy="12" r="4"/><path d="M12 2v2M12 20v2M4.93 4.93l1.42 1.42M17.66 17.66l1.41 1.41M2 12h2M20 12h2M6.34 17.66l-1.41 1.41M19.07 4.93l-1.41 1.41"/></svg>',
  };
  let blogLanguage = "en";
  try {
    const saved = localStorage.getItem("punam-language");
    if (["en", "de"].includes(saved)) blogLanguage = saved;
  } catch (_) {}

  function postsForLanguage() {
    const localized = editions[blogLanguage].blogs;
    return [...localized, ...editions.en.blogs.slice(localized.length)];
  }

  function selectedIndex() {
    const slug = new URLSearchParams(location.search).get("post");
    return slug ? slugs.indexOf(slug) : -1;
  }

  function syncStandaloneTheme() {
    const dark = document.documentElement.dataset.theme === "dark";
    const button = document.querySelector("#blog-theme-toggle");
    button.innerHTML = themeIcons[dark ? "sun" : "moon"];
    button.setAttribute("aria-label", dark ? "Switch to light mode" : "Switch to night mode");
    document.querySelector('meta[name="theme-color"]').content = dark ? "#1c131f" : "#e7ece9";
  }

  function renderStandaloneBlog() {
    const t = editions[blogLanguage];
    const posts = postsForLanguage();
    const active = selectedIndex();
    document.documentElement.lang = blogLanguage;
    document
      .querySelectorAll("[data-blog-lang]")
      .forEach((button) =>
        button.setAttribute("aria-pressed", String(button.dataset.blogLang === blogLanguage)),
      );

    if (active < 0 || !posts[active]) {
      document.body.classList.remove("is-reading");
      document.title = `${t.ui.blogCollection} | Punam Adhikari`;
      root.innerHTML = `<header class="blog-library-intro"><p class="eyebrow">${html(t.ui.blog)} · ${posts.length} stories</p><h1>${html(t.ui.blogCollection)}</h1><p>${html(t.ui.blogIntro)}</p><div class="blog-intro-guide"><span>Architecture diagrams</span><span>Engineering decisions</span><span>Lessons learned</span></div></header><div class="blog-grid">${posts
        .map(
          (post, index) =>
            `<article class="blog-card ${index === 0 ? "blog-card-featured" : ""}"><a class="blog-card-link" href="/blog/?post=${slugs[index]}" aria-label="${html(t.ui.readArticle)}: ${html(post.title)}"><p class="blog-card-index">${String(index + 1).padStart(2, "0")} / ${String(posts.length).padStart(2, "0")} · ${html(post.category.split("/").pop().trim())}</p><h2>${html(post.title)}</h2><p class="blog-card-summary">${html(post.intro)}</p><div class="blog-card-tags">${post.tags.slice(0, 3).map((tag) => `<span>${html(tag)}</span>`).join("")}</div><div class="blog-card-footer"><span>${html(post.note)}</span><strong>${html(t.ui.readArticle)}${arrow}</strong></div></a></article>`,
        )
        .join("")}</div>`;
      return;
    }

    document.body.classList.add("is-reading");
    const post = posts[active];
    const technical = blogTechnical[active];
    const sectionMarkup = post.sections
      .map((section, index) => {
        const paragraphs = Array.isArray(section[1]) ? section[1] : [section[1]];
        return `<section class="article-section" id="blog-section-${index}"><p class="article-section-number">${String(index + 1).padStart(2, "0")}</p><h2>${html(section[0])}</h2>${paragraphs.map((paragraph) => `<p>${html(paragraph)}</p>`).join("")}</section>`;
      })
      .join("");
    const workflow = post.workflow
      ? `<section class="blog-workflow"><p class="eyebrow">${html(t.ui.buildFlow)}</p><ol>${post.workflow.map((step) => `<li>${html(step)}</li>`).join("")}</ol></section>`
      : "";
    document.title = `${post.title} | Punam Adhikari`;
    document.querySelector('meta[name="description"]').content = post.intro;
    const tocItems = post.sections.map((section, index) => `<button type="button" data-blog-section="${index}"><span>${String(index + 1).padStart(2, "0")}</span>${html(section[0])}</button>`).join("");
    const previous = (active - 1 + posts.length) % posts.length;
    const next = (active + 1) % posts.length;
    root.innerHTML = `<div class="blog-page-bar"><a href="/blog/">← ${html(t.ui.backToBlogs)}</a><div><button class="copy-article-link" type="button">Copy link</button><span>${String(active + 1).padStart(2, "0")} / ${String(posts.length).padStart(2, "0")}</span></div></div><article class="blog-post"><header class="blog-post-hero"><p class="eyebrow">${html(post.category)}</p><h1>${html(post.title)}</h1><p class="blog-post-deck">${html(post.intro)}</p><div class="blog-post-meta"><span>${html(t.ui.byline)}</span><span>${html(post.note)}</span></div></header><details class="blog-mobile-toc"><summary>${html(t.ui.onThisPage)} <span>Open ↓</span></summary>${tocItems}</details><div class="blog-article-layout"><aside class="blog-toc"><p>${html(t.ui.onThisPage)}</p>${tocItems}</aside><div class="blog-post-body"><p class="blog-post-lead">${html(post.lead)}</p><section class="blog-facts" aria-labelledby="blog-facts-title"><p class="eyebrow" id="blog-facts-title">${html(t.ui.atGlance)}</p><div>${technical.facts.map((fact) => `<p><strong>${html(fact[0])}</strong><span>${html(fact[1])}</span></p>`).join("")}</div></section><figure class="architecture-diagram"><figcaption><span><span class="eyebrow">${html(t.ui.architecture)}</span><strong>${html(t.ui.architectureNote)}</strong></span></figcaption><ol>${technical.architecture.map((node) => `<li><span>${html(node[0])}</span><strong>${html(node[1])}</strong><small>${html(node[2])}</small></li>`).join("")}</ol><p>${html(technical.architectureCaption)}</p></figure><p class="eyebrow article-kicker">${html(t.ui.deepDive)}</p>${sectionMarkup}${workflow}<blockquote>${html(post.takeaway)}</blockquote><div class="tags">${post.tags.map((tag) => `<span>${html(tag)}</span>`).join("")}</div><nav class="article-navigation" aria-label="More articles"><a href="/blog/?post=${slugs[previous]}"><small>Previous story</small><strong>← ${html(posts[previous].title)}</strong></a><a href="/blog/?post=${slugs[next]}"><small>Next story</small><strong>${html(posts[next].title)} →</strong></a></nav></div></div></article><button class="back-to-top" type="button" aria-label="Back to top">↑<span>Top</span></button>`;

    const copyButton = root.querySelector(".copy-article-link");
    copyButton?.addEventListener("click", async () => {
      try {
        await navigator.clipboard.writeText(location.href);
        copyButton.textContent = "Link copied";
      } catch (_) {
        copyButton.textContent = "Copy unavailable";
      }
      window.setTimeout(() => (copyButton.textContent = "Copy link"), 1800);
    });
    root.querySelector(".back-to-top")?.addEventListener("click", () =>
      window.scrollTo({ top: 0, behavior: "smooth" }),
    );
    const sections = [...root.querySelectorAll(".article-section")];
    const tocButtons = [...root.querySelectorAll("[data-blog-section]")];
    const observer = new IntersectionObserver(
      (entries) => {
        const visible = entries.filter((entry) => entry.isIntersecting).sort((a, b) => a.boundingClientRect.top - b.boundingClientRect.top)[0];
        if (!visible) return;
        const index = visible.target.id.split("-").pop();
        tocButtons.forEach((button) => button.classList.toggle("is-active", button.dataset.blogSection === index));
      },
      { rootMargin: "-18% 0px -68%", threshold: 0 },
    );
    sections.forEach((section) => observer.observe(section));
  }

  document.querySelector("#blog-theme-toggle").addEventListener("click", () => {
    document.documentElement.dataset.theme =
      document.documentElement.dataset.theme === "dark" ? "light" : "dark";
    syncStandaloneTheme();
  });
  document.querySelectorAll("[data-blog-lang]").forEach((button) =>
    button.addEventListener("click", () => {
      blogLanguage = button.dataset.blogLang;
      try {
        localStorage.setItem("punam-language", blogLanguage);
      } catch (_) {}
      renderStandaloneBlog();
    }),
  );
  root.addEventListener("click", (event) => {
    const button = event.target.closest("[data-blog-section]");
    if (!button) return;
    document
      .querySelector(`#blog-section-${button.dataset.blogSection}`)
      ?.scrollIntoView({ behavior: "smooth", block: "start" });
    event.target.closest(".blog-mobile-toc")?.removeAttribute("open");
  });
  window.addEventListener("scroll", () => {
    const progress = document.querySelector(".reading-progress span");
    if (!progress || !document.body.classList.contains("is-reading")) return;
    const available = document.documentElement.scrollHeight - window.innerHeight;
    progress.style.transform = `scaleX(${available > 0 ? Math.min(1, window.scrollY / available) : 0})`;
    root.querySelector(".back-to-top")?.classList.toggle("is-visible", window.scrollY > 700);
  }, { passive: true });
  document.querySelector("#blog-year").textContent = new Date().getFullYear();
  syncStandaloneTheme();
  renderStandaloneBlog();
}

const standaloneBlogRoot = document.querySelector("#blog-page-root");
if (standaloneBlogRoot) {
  initStandaloneBlogPage(standaloneBlogRoot);
} else {
const repositories = [
  "MediPredict",
  "Lingua_Voice",
  "Financial-Document-Processing-System-Using-RAG",
  "AI_Powered_Monument_Detector",
  "Web_Based_Proctoring",
  "BrainCognize",
];
const credentials = [
  ["Fuse Machines AI Fellowship", "1N9-9OheNY0HCj1IGxl4aSNICi3cegph4"],
  [
    "IGDTUW Computer Vision & Deep Learning",
    "1XCm2iekbsjfC0D-fONdIIQmqjLpvqZ38",
  ],
  ["Machine Learning Specialization", "12AHjVHMtRne9uMfBMzUKd1hfNJJHQRfF"],
  ["AWS Academy Data Engineering", "1tzrs485AYAWPH-Bt8soYMSqMzAzaMzHC"],
  ["IBM Data Engineering Specialization", "1KfLwO4Ey69kwr9bBtkFGT7ZmlBQIZol3"],
  ["HackerRank SQL", "1vE1UD0T8oaPsLURdW2OsJmryVjAwCWxV"],
];
const skillSets = [
  "PyTorch, TensorFlow, Keras, Scikit-learn, Transformers, Whisper, NeMo, ESPnet, OpenCV, YOLO",
  "SFT, DPO, LoRA, QLoRA, LangGraph, LangChain, BM25, FAISS, Qdrant, RAG, MCP",
  "SQL, PySpark, Apache Spark, Databricks, Snowflake, Airflow, Kafka, Delta Lake, DuckDB, Azure Data Factory, ADLS, AWS S3, Redshift",
  "Python, FastAPI, Docker, Kubernetes, REST APIs, Git, Linux, CI/CD, PostgreSQL, MySQL, MongoDB, Prometheus, OpenTelemetry",
];
const email = "punamadhikari422@gmail.com";
const linkedin = "https://www.linkedin.com/in/punam-adhikari-a29617231/";
const github = "https://github.com/Punam918";
const book = document.querySelector("#book");
const spread = document.querySelector("#spread");
const select = document.querySelector("#page-select");
let language = "en";
try {
  const saved = localStorage.getItem("punam-language");
  if (["en", "de"].includes(saved)) language = saved;
} catch (_) {}
let current = Math.max(0, routes.indexOf(location.hash.slice(1)));
let leafAnimation;
let touchStart;

function escapeHTML(value) {
  return String(value).replace(
    /[&<>"']/g,
    (char) =>
      ({ "&": "&amp;", "<": "&lt;", ">": "&gt;", '"': "&quot;", "'": "&#39;" })[
        char
      ],
  );
}
const e = escapeHTML;
const iconPaths = {
  "arrow-up-right": '<path d="M7 7h10v10"/><path d="M7 17 17 7"/>',
  copy: '<rect width="14" height="14" x="8" y="8" rx="2"/><path d="M4 16c-1.1 0-2-.9-2-2V4c0-1.1.9-2 2-2h10c1.1 0 2 .9 2 2"/>',
  download: '<path d="M21 15v4a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2v-4"/><path d="m7 10 5 5 5-5"/><path d="M12 15V3"/>',
  moon: '<path d="M12 3a6 6 0 0 0 9 9 9 9 0 1 1-9-9"/>',
  sun: '<circle cx="12" cy="12" r="4"/><path d="M12 2v2M12 20v2M4.93 4.93l1.42 1.42M17.66 17.66l1.41 1.41M2 12h2M20 12h2M6.34 17.66l-1.41 1.41M19.07 4.93l-1.41 1.41"/>',
};
const icon = (name) =>
  `<svg aria-hidden="true" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round">${iconPaths[name] || ""}</svg>`;
const tags = (values) =>
  `<div class="tags">${values.map((value) => `<span>${e(value)}</span>`).join("")}</div>`;
const external = (url, label, className = "text-link") =>
  `<a class="${className}" href="${e(url)}" target="_blank" rel="noopener">${e(label)}${icon("arrow-up-right")}</a>`;
function chapterIndex() {
  for (let index = chapterStarts.length - 1; index >= 0; index -= 1) {
    if (current >= chapterStarts[index]) return index;
  }
  return 0;
}
function pageFooter(label, number) {
  return `<div class="page-footer"><span>${e(label)}</span><span class="folio">${String(number).padStart(2, "0")}</span></div>`;
}
function leftIntro(data, chapter, titleClass = "") {
  const t = editions[language];
  return `<div class="running-head"><span>Punam Adhikari</span></div><div class="chapter-intro"><h1 class="${titleClass}">${e(data.title)}</h1><p>${e(data.intro)}</p><div class="chapter-number" aria-hidden="true">${String(chapter + 1).padStart(2, "0")}</div><div class="chapter-note">${e(data.note)}</div></div>`;
}

const experienceProfilesDe = [
  { name: "NSDevil", location: "Daejeon, Korea", role: "KI-Forschungsingenieurin", period: "Okt. 2025 – heute", summary: "Ich entwickle und überführe KI-Systeme für Sprache, Bewertung, Retrieval und Model Deployment in produktionsnahe Umgebungen – von Experimenten und Evaluation bis zur Auslieferung.", highlights: [["Koreanische Sprach-KI", "Fine-Tuning von Whisper, NeMo und Conformer für koreanische Spracherkennung mit einer Wortfehlerrate unter 10 Prozent sowie Entwicklung koreanischer Sprachsynthese mit ESPnet."], ["Erklärbare Bewertung", "Entwicklung eines erklärbaren Systems zur Bewertung koreanischer Aufsätze mit Microservices und LLM-basierter Rubrik-Auswertung."], ["LLM-Anpassung", "Fine-Tuning von HyperCLOVAX 3B und 14B mit SFT, DPO, LoRA und QLoRA für mehrere akademische Domänen."], ["Multimodales RAG & Deployment", "Entwicklung eines produktionsnahen multimodalen Retrieval-Systems und Deployment von Transformer-Modellen auf entfernter GPU-Infrastruktur mit CI/CD."]] },
  { name: "Abacus Insights", mode: "Vor Ort", role: "Software Engineer I", period: "Apr. 2025 – Okt. 2025", summary: "Ich entwickelte und betreute zuverlässige Datenworkflows für Gesundheitsinformationen und verband Dokumentenintelligenz mit skalierbarem Cloud Data Engineering.", highlights: [["Dokumentenintelligenz im Gesundheitswesen", "Einsatz von NLP zur automatisierten PDF-Datenextraktion und zur Verbesserung von Genauigkeit und Effizienz."], ["Cloud-Datenpipelines", "Entwicklung und Betrieb von ETL-Workflows mit Databricks, Snowflake, Python, PySpark und SQL."], ["Qualität & Zuverlässigkeit", "Optimierung von Datenprodukten sowie Überwachung von Pipelines für eine unterbrechungsfreie Datenbereitstellung."], ["Zusammenarbeit", "Übersetzung fachlicher Anforderungen in skalierbare Datenlösungen innerhalb agiler Engineering-Teams."]] },
  { name: "Danson Solutions", mode: "Hybrid", role: "AI/ML Research Intern", period: "Nov. 2024 – Apr. 2025", summary: "Ich untersuchte praktische Anwendungen von Sprachmodellen für Softwaretransformation und verband Experimente, Evaluation und Forschungsdokumentation.", highlights: [["Code-Übersetzung", "Entwicklung einer PHP-zu-Java-Pipeline mit Meta-LLaMA und GPT-3.5 Turbo."], ["LLM-Evaluation", "Fine-Tuning und Evaluation von Sprachmodellen für Codegenerierung mit strukturiertem Prompt Engineering."], ["KI-gestütztes Refactoring", "Untersuchung von Code-Refactoring mit Embeddings, syntaktischer Analyse und modellgestützten Transformationsabläufen."], ["Forschungszusammenarbeit", "Arbeit mit einem verteilten Forschungsteam an multimodalen Datensätzen und Dokumentation experimenteller Ergebnisse."]] },
];

const projectSpreads = [
  [
    { section: "LLM-Based Project", title: "LLM120", kind: "Language model engineering", summary: "An end-to-end language-model engineering system built to train a compact decoder-only model from random initialization on a single laptop GPU. The project covers the complete path from raw documents and tokenizer training to base-model evaluation and assistant alignment.", points: ["Trained a custom byte-level BPE tokenizer while preserving reproducible corpus and vocabulary artifacts.", "Implemented a 125M-parameter Transformer with grouped-query attention and configurable training components.", "Built resumable pretraining, evaluation, SFT, DPO, reward-model, and RLOO stages as separate reproducible workflows.", "Added atomic checkpoints, state restoration, validation gates, and hardware-aware controls for an 8 GB GPU."], stack: "PyTorch · Transformers · Tokenizers · DPO · RLOO", href: "/blog/?post=llm120", link: "Read case study" },
    { section: "RAG Project", title: "CiteMind", kind: "Evidence-grounded research assistant", summary: "A research workspace for exploring scientific papers through evidence-grounded retrieval and generation. It keeps source passages, citations, and retrieval decisions visible so answers can be checked instead of accepted as unsupported model output.", points: ["Combined dense semantic search with sparse lexical retrieval to preserve both meaning and exact scientific terminology.", "Applied cross-encoder reranking to prioritize the most relevant passages before generation.", "Orchestrated retrieval, verification, query rewriting, and external search through a conditional LangGraph workflow.", "Delivered source-grounded streaming answers with session isolation, citation evidence, and an inspectable research interface."], stack: "FastAPI · LangGraph · Qdrant · React · Docker", href: "/blog/?post=citemind", link: "Read case study" },
  ],
  [
    { section: "Agentic AI Project", title: "DevPilot", kind: "Human-governed AI debugging", summary: "An AI-assisted debugging workbench designed around constrained authority and human approval. It investigates a concrete repository failure, proposes reviewable edits, and returns verification evidence without giving the model unrestricted access to the development environment.", points: ["Restricted model actions through bounded MCP tools, validated inputs, and explicit approval gates.", "Prepared sanitized disposable workspaces so investigation and edits never operated directly on the original repository.", "Executed fixed test workflows before and after changes to distinguish plausible patches from verified repairs.", "Exported patches, reports, traces, approval records, and test evidence for independent review."], stack: "Qwen · MCP · FastAPI · Docker · OpenTelemetry", href: "/blog/?post=devpilot", link: "Read case study" },
    { section: "Computer Vision Project", title: "Web-Based Proctoring", kind: "Real-time exam monitoring", summary: "A seven-module computer-vision system for monitoring online examinations through identity, behavior, and environment signals. The modules were integrated into a single workflow that analyzes webcam frames and raises live alerts for review.", points: ["Detected people, multiple faces, and prohibited objects using YOLO and OpenCV-based detection pipelines.", "Verified candidate identity with Dlib ResNet embeddings and added color-space anti-spoofing classification.", "Measured gaze and mouth movement from facial landmarks using temporal thresholds to reduce isolated false alerts.", "Integrated head-pose estimation, module outputs, and alert logic into a browser-based monitoring pipeline."], stack: "Python · OpenCV · YOLO · Dlib · Scikit-learn · TensorFlow", href: "https://github.com/Punam918/Web_Based_Proctoring", link: "View repository" },
  ],
  [
    { section: "Data Engineering", title: "VerityLake", kind: "Governed data and retrieval platform", summary: "A local-first governed data platform that connects ingestion, validation, lakehouse publishing, retrieval, and citation evidence. It treats data quality and release identity as part of the answer pipeline rather than separate operational concerns.", points: ["Orchestrated Bronze, Silver, and Gold transformations through a seven-task Airflow workflow.", "Added schema checks, deduplication, quality reports, quarantine paths, and immutable raw evidence.", "Published versioned Delta snapshots with lineage metadata and reversible release pointers.", "Bound each validated snapshot to its vector index and model identity so retrieval results remain reproducible."], stack: "Airflow · DuckDB · Delta Lake · MinIO · Chroma", href: "/blog/?post=veritylake", link: "Read case study" },
    { section: "Data Engineering", title: "Bank Loan Analytics", kind: "Cloud analytics pipeline", summary: "A cloud-oriented analytics workflow for transforming raw loan records into reliable datasets and decision-ready reporting. The project connects ingestion, distributed processing, orchestration, and visualization in one repeatable data pipeline.", points: ["Built automated ingestion workflows with Azure Data Factory and organized source data in cloud storage.", "Used Databricks and PySpark for large-scale cleaning, transformation, and feature preparation.", "Scheduled and monitored transformation jobs through Airflow DAGs to make execution repeatable and observable.", "Delivered Power BI dashboards for loan approval trends, customer segmentation, and credit-risk analysis."], stack: "PySpark · Databricks · Airflow · Azure Data Factory · Power BI", href: "https://github.com/Punam918/BankLoanAnalysis", link: "View repository" },
  ],
];

const adventureWorksProject = {
  section: "Data Engineering",
  title: "AdventureWorks Data Engineering",
  summary: "An end-to-end Azure data engineering pipeline that moves the AdventureWorks dataset from source ingestion to governed storage, transformation, analytics, and business reporting through a medallion architecture.",
  points: [
    "Built parameterized Azure Data Factory ingestion to move multiple source files into the Bronze layer of ADLS Gen2.",
    "Used Azure Databricks and PySpark to clean, transform, and publish Parquet data into the Silver layer.",
    "Created serverless Synapse SQL views and Gold-layer analytical structures for downstream querying.",
    "Connected curated sales data to Power BI for interactive reporting and business analysis.",
  ],
  stack: "Azure Data Factory · ADLS Gen2 · Databricks · PySpark · Synapse Analytics · Power BI",
};

const projectPages = [...projectSpreads.flat(), adventureWorksProject];

const projectPagesDe = [
  { title: "LLM120", summary: "Ein durchgängiges System zum Trainieren eines kompakten Decoder-Sprachmodells von zufälliger Initialisierung auf einer einzelnen Laptop-GPU. Das Projekt reicht von Rohdokumenten und Tokenizer-Training bis zur Evaluation und Ausrichtung des Assistenten.", points: ["Training eines eigenen Byte-Level-BPE-Tokenizers mit reproduzierbaren Korpus- und Vokabularartefakten.", "Implementierung eines Transformers mit 125 Millionen Parametern, Grouped-Query Attention und konfigurierbaren Trainingskomponenten.", "Aufbau separater Workflows für Pretraining, Evaluation, SFT, DPO, Reward-Modell und RLOO.", "Atomare Checkpoints, Wiederherstellung des Trainingszustands und Hardware-Kontrollen für eine GPU mit 8 GB Speicher."], stack: "PyTorch · Transformers · Tokenizers · DPO · RLOO" },
  { title: "CiteMind", summary: "Ein Recherchearbeitsplatz für wissenschaftliche Publikationen mit evidenzbasierter Suche und Generierung. Quellenpassagen, Zitate und Retrieval-Entscheidungen bleiben sichtbar und überprüfbar.", points: ["Kombination aus semantischer Vektorsuche und lexikalischem Retrieval für Fachbegriffe und inhaltliche Ähnlichkeit.", "Cross-Encoder-Reranking zur Priorisierung der relevantesten Passagen vor der Generierung.", "Bedingter LangGraph-Workflow für Retrieval, Verifikation, Query-Rewriting und externe Suche.", "Streaming-Antworten mit Quellenbelegen, isolierten Sitzungen und einer nachvollziehbaren Rechercheoberfläche."], stack: "FastAPI · LangGraph · Qdrant · React · Docker" },
  { title: "DevPilot", summary: "Ein KI-gestützter Debugging-Arbeitsplatz mit begrenzten Berechtigungen und menschlicher Freigabe. Er untersucht konkrete Fehler, schlägt prüfbare Änderungen vor und liefert nachvollziehbare Verifikationsergebnisse.", points: ["Begrenzung der Modellaktionen durch validierte MCP-Werkzeuge und explizite Freigabeschritte.", "Verwendung bereinigter, temporärer Arbeitskopien zum Schutz des ursprünglichen Repositorys.", "Fest definierte Testabläufe vor und nach Änderungen zur Prüfung tatsächlicher Reparaturen.", "Export von Patches, Berichten, Traces, Freigaben und Testergebnissen für unabhängige Reviews."], stack: "Qwen · MCP · FastAPI · Docker · OpenTelemetry" },
  { title: "Webbasiertes Proctoring", summary: "Ein Computer-Vision-System mit sieben Modulen zur Überwachung von Online-Prüfungen anhand von Identität, Verhalten und Umgebung. Webcam-Frames werden analysiert und relevante Ereignisse als Live-Hinweise bereitgestellt.", points: ["Erkennung von Personen, mehreren Gesichtern und unerlaubten Objekten mit YOLO und OpenCV.", "Gesichtsverifikation mit Dlib-Embeddings sowie zusätzliche Anti-Spoofing-Klassifikation.", "Analyse von Blickrichtung und Mundbewegungen anhand zeitlicher Schwellenwerte und Gesichtslandmarken.", "Integration von Kopfhaltung, Modulergebnissen und Alarmregeln in eine browserbasierte Pipeline."], stack: "Python · OpenCV · YOLO · Dlib · Scikit-learn · TensorFlow" },
  { title: "VerityLake", summary: "Eine lokal betriebene, kontrollierte Datenplattform, die Ingestion, Validierung, Lakehouse-Releases, Retrieval und Zitiernachweise verbindet. Datenqualität und Release-Identität sind Teil der Antwortpipeline.", points: ["Orchestrierung von Bronze-, Silver- und Gold-Transformationen über einen Airflow-Workflow mit sieben Tasks.", "Schema-Prüfungen, Deduplizierung, Qualitätsberichte, Quarantänepfade und unveränderliche Rohdaten.", "Versionierte Delta-Snapshots mit Lineage-Metadaten und reversiblen Release-Zeigern.", "Verknüpfung jedes validierten Snapshots mit Vektorindex und Modellidentität für reproduzierbares Retrieval."], stack: "Airflow · DuckDB · Delta Lake · MinIO · Chroma" },
  { title: "Bankkredit-Analyse", summary: "Ein cloudorientierter Analyseworkflow, der Rohdaten zu Krediten in zuverlässige Datensätze und entscheidungsrelevante Berichte überführt. Ingestion, verteilte Verarbeitung, Orchestrierung und Visualisierung bilden eine wiederholbare Pipeline.", points: ["Automatisierte Ingestion mit Azure Data Factory und strukturierte Ablage in Cloud Storage.", "Datenbereinigung, Transformation und Feature-Aufbereitung mit Databricks und PySpark.", "Planung und Überwachung der Transformationsjobs durch Airflow-DAGs.", "Power-BI-Dashboards für Genehmigungstrends, Kundensegmentierung und Kreditrisiken."], stack: "PySpark · Databricks · Airflow · Azure Data Factory · Power BI" },
  { title: "AdventureWorks Data Engineering", summary: "Eine durchgängige Azure-Datenpipeline, die den AdventureWorks-Datensatz über eine Medallion-Architektur von der Ingestion bis zu Transformation, Analyse und Reporting verarbeitet.", points: ["Parametrisierte Azure-Data-Factory-Pipeline für mehrere Quelldateien in die Bronze-Schicht von ADLS Gen2.", "Transformation und Veröffentlichung von Parquet-Daten in der Silver-Schicht mit Databricks und PySpark.", "Serverlose Synapse-SQL-Views und analytische Gold-Strukturen für nachgelagerte Abfragen.", "Anbindung kuratierter Verkaufsdaten an Power BI für interaktive Auswertungen."], stack: "Azure Data Factory · ADLS Gen2 · Databricks · PySpark · Synapse Analytics · Power BI" },
];

function projectsIntroPage() {
  if (language === "de") return `<article class="projects-intro"><p>Technische Interessen</p><h1>Projekte</h1><p class="projects-intro-lead">Meine Interessen umfassen künstliche Intelligenz, maschinelles Lernen, LLMs, RAG, Data Engineering und DevOps. In diesen Projekten untersuche ich, wie Modelle, Daten und Software zu praktischen und zuverlässigen Anwendungen zusammenwirken.</p><div class="project-interests"><div><strong>KI & maschinelles Lernen</strong><span>Entwicklung und Evaluation von Machine-Learning- und Computer-Vision-Lösungen.</span></div><div><strong>LLMs & RAG</strong><span>Sprachmodelle, Retrieval und quellenbasierte KI-Anwendungen.</span></div><div><strong>Data Engineering</strong><span>Zuverlässige Datenpipelines, Analyseworkflows und Cloud-Datenplattformen.</span></div><div><strong>DevOps & Systeme</strong><span>APIs, Container, CI/CD, Observability und zuverlässige Deployment-Workflows.</span></div></div></article>`;
  return `<article class="projects-intro"><p>Technical interests</p><h1>Projects</h1><p class="projects-intro-lead">My interests span artificial intelligence, machine learning, LLMs, RAG, data engineering, and DevOps. Through these projects, I explore how models, data, and software can work together to create practical and reliable applications.</p><div class="project-interests"><div><strong>AI & Machine Learning</strong><span>Building and evaluating machine-learning and computer-vision solutions for practical applications.</span></div><div><strong>LLMs & RAG</strong><span>Exploring language models, retrieval, and grounded AI applications.</span></div><div><strong>Data Engineering</strong><span>Designing reliable data pipelines, analytics workflows, and cloud data platforms.</span></div><div><strong>DevOps & Systems</strong><span>Supporting applications with APIs, containers, CI/CD, observability, and dependable deployment workflows.</span></div></div></article>`;
}

function projectPage(project, number) {
  return `<article class="project-sheet"><h1>${e(project.title)}</h1><p class="project-summary">${e(project.summary)}</p><ul>${project.points.map((point) => `<li>${e(point)}</li>`).join("")}</ul><p class="project-stack">${e(project.stack)}</p></article>`;
}

function content(index = current) {
  const t = editions[language];
  let left = "",
    right = "";
  if (index === 0) {
    const a = t.about;
    left = `<div class="running-head"><span>${e(t.chapters[0])}</span><span>01 / 06</span></div><h1 class="profile-name">Punam<br><em>Adhikari</em></h1><p class="profile-role">${e(a.role)}</p><picture><source srcset="/assets/Punam-Picture.webp" type="image/webp"><img class="portrait" src="/assets/Punam-Picture.png" alt="${e(t.ui.portrait)}" width="900" height="900" fetchpriority="high"></picture><div class="portrait-caption portrait-location"><span>${e(t.ui.location)}</span></div>`;
    right = `<h2>${e(a.title)}</h2><p class="lead">${e(a.lead)}</p>${a.body.map((p) => `<p class="body-copy">${e(p)}</p>`).join("")}<div class="about-focus">${a.strengths.map((item) => `<div class="focus-item"><strong>${e(item[0])}</strong><span>${e(item[1])}</span></div>`).join("")}</div><div class="inline-links">${external(linkedin, "LinkedIn")}<a href="/assets/Punam_cv.pdf" target="_blank" rel="noopener">${e(t.ui.download)}${icon("download")}</a></div>`;
  } else if (index === 1) {
    const a = language === "de" ? experienceProfilesDe[0] : t.experience;
    const label = language === "de" ? "Berufserfahrung" : "Professional experience";
    const role = language === "de" ? a.role : "AI Research Engineer";
    const period = language === "de" ? a.period : "Oct 2025 – Present";
    const location = language === "de" ? a.location : "Daejeon, Korea";
    left = `<div class="running-head"><span>${label}</span></div><div class="nsdevil-intro"><h1 class="career-role-title">${e(role)}</h1><span>${e(period)}</span></div>`;
    right = `<div class="experience-position"><strong>NSDevil</strong><span>${e(location)} · ${e(period)}</span><h3>${e(role)}</h3><p>${e(a.summary)}</p></div><ul class="experience-points">${a.highlights.map((item) => `<li><strong>${e(item[0])}</strong><p>${e(item[1])}</p></li>`).join("")}</ul>`;
  } else if (index === 2 || index === 3) {
    let a = index === 2
      ? {
          name: "Abacus Insights",
          description: "US healthcare data engineering through Techkraft Inc.",
          organization: "Abacus Insights",
          mode: "On-site",
          role: "Software Engineer I",
          period: "Apr 2025 – Oct 2025",
          summary: "I built and maintained reliable data workflows for healthcare information, combining document intelligence with scalable cloud data engineering.",
          highlights: [
            ["Healthcare document intelligence", "Applied NLP techniques to automate PDF data extraction and improve the accuracy and efficiency of information retrieval."],
            ["Cloud data pipelines", "Designed and maintained ETL workflows with Databricks, Snowflake, Python, PySpark, and SQL."],
            ["Quality & reliability", "Optimized data assets for performance and quality, and monitored pipelines to maintain uninterrupted data distribution."],
            ["Engineering collaboration", "Translated stakeholder requirements into scalable data solutions while working across Agile engineering teams."],
          ],
        }
      : {
          name: "Danson Solutions",
          description: "Applied AI research and software engineering in a hybrid environment.",
          organization: "Danson Solutions",
          mode: "Hybrid",
          role: "AI/ML Research Intern",
          period: "Nov 2024 – Apr 2025",
          summary: "I explored practical uses of language models for software transformation, combining experimentation, evaluation, and research documentation.",
          highlights: [
            ["Code translation", "Engineered a PHP-to-Java translation pipeline using Meta-LLaMA and GPT-3.5 Turbo."],
            ["LLM evaluation", "Fine-tuned and evaluated language models for code-generation tasks using structured prompt-engineering techniques."],
            ["AI-assisted refactoring", "Explored code refactoring with embeddings, syntactic analysis, and model-assisted transformation workflows."],
            ["Research collaboration", "Worked with a remote research team on multimodal datasets and documented experimental findings."],
          ],
        };
    if (language === "de") a = experienceProfilesDe[index - 1];
    const experienceLabel = language === "de" ? "Berufserfahrung" : "Professional experience";
    left = `<div class="running-head"><span>${experienceLabel}</span></div><div class="nsdevil-intro"><h1 class="career-role-title">${e(a.role)}</h1><span>${e(a.period)}</span></div>`;
    right = `<div class="experience-position"><strong>${e(a.name)}</strong><span>${e(a.mode)} · ${e(a.period)}</span><h3>${e(a.role)}</h3><p>${e(a.summary)}</p></div><ul class="experience-points">${a.highlights.map((item) => `<li><strong>${e(item[0])}</strong><p>${e(item[1])}</p></li>`).join("")}</ul>`;
  } else if (index === 4) {
    const a = t.education;
    const educationLabel = language === "de" ? "Ausbildung" : "Education";
    const credentialHeading = language === "de" ? "Stipendien & Zertifikate" : "Fellowships & credentials";
    const credentialCopy = language === "de"
      ? "Stipendien und berufliche Zertifikate in künstlicher Intelligenz, Computer Vision, Data Engineering und SQL."
      : "Fellowships and professional certifications across artificial intelligence, computer vision, data engineering, and SQL.";
    const educationPeriod = language === "de" ? "Mai 2021 – April 2025" : "May 2021 – April 2025";
    left = `<div class="running-head"><span>${educationLabel}</span></div><div class="education-intro"><h1>${e(a.degree)}</h1><strong>${e(a.school)}</strong><span>${e(t.ui.location)}</span><time>${educationPeriod}</time></div>`;
    right = `<div class="credentials-panel"><h2>${credentialHeading}</h2><p class="credential-intro">${credentialCopy}</p><div class="credential-list">${credentials.map((c, i) => `<a class="credential" href="https://drive.google.com/file/d/${c[1]}/view" target="_blank" rel="noopener"><span><strong>${e(c[0])}</strong><small>${e(a.credentialNotes[i])}</small></span>${icon("arrow-up-right")}</a>`).join("")}</div></div>`;
  } else if (index >= 5 && index <= 8) {
    const leftPosition = (index - 5) * 2;
    const localizedProjects = language === "de" ? projectPagesDe : projectPages;
    left = leftPosition === 0
      ? projectsIntroPage()
      : projectPage(localizedProjects[leftPosition - 1], leftPosition);
    right = projectPage(localizedProjects[leftPosition], leftPosition + 1);
  } else if (index === 9) {
    const a = t.skills;
    const expertiseLabel = language === "de" ? "Fachkenntnisse" : "Expertise";
    const expertiseTitle = language === "de" ? "Technische<br>Expertise" : "Technical<br>Expertise";
    const expertiseCopy = language === "de"
      ? "Ich arbeite an der Schnittstelle von maschinellem Lernen, Sprachsystemen, Datenplattformen und der technischen Umsetzung zuverlässiger Anwendungen."
      : "I work across machine learning, language systems, data platforms, and the engineering required to move them into dependable applications.";
    const focusLabel = language === "de" ? "Schwerpunkte" : "Primary focus";
    const toolsHeading = language === "de" ? "Werkzeuge & Technologien" : "Tools & technologies";
    const toolsCopy = language === "de"
      ? "Ein praxisorientierter Werkzeugkasten für Entwicklung, Evaluation, Deployment und Betrieb datengetriebener Anwendungen."
      : "A practical toolkit for developing, evaluating, deploying, and operating data-driven applications.";
    left = `<div class="running-head"><span>${expertiseLabel}</span></div><div class="section-profile expertise-profile"><h1>${expertiseTitle}</h1><p>${expertiseCopy}</p><div class="section-profile-meta"><strong>${focusLabel}</strong><span>AI/ML · LLMs & RAG · Data Engineering · DevOps</span></div></div>`;
    right = `<div class="expertise-panel"><h2>${toolsHeading}</h2><p class="section-deck">${toolsCopy}</p><div class="expertise-list">${a.groups.map((group, i) => `<section class="expertise-item"><h3>${e(group)}</h3><p>${e(skillSets[i])}</p></section>`).join("")}</div></div>`;
  } else {
    const a = t.contact;
    const contactLabel = language === "de" ? "Kontakt" : "Contact";
    const contactTitle = language === "de" ? "Lassen Sie uns<br>ins Gespräch kommen." : "Let’s connect.";
    const contactCopy = language === "de"
      ? "Ich bin offen für Positionen und Kooperationen in den Bereichen AI/ML, LLM-Anwendungen, Data Engineering und produktionsnahe Softwaresysteme."
      : "I’m open to opportunities and collaborations involving AI/ML, LLM applications, data engineering, and production-focused software systems.";
    const basedLabel = language === "de" ? "Standort" : "Based in";
    const basedCopy = language === "de" ? "Kathmandu, Nepal · Offen für Remote- und internationale Arbeit" : "Kathmandu, Nepal · Open to remote and international work";
    const contactHeading = language === "de" ? "Kontakt aufnehmen" : "Get in touch";
    const contactDeck = language === "de"
      ? "Für Positionen, Projektkooperationen oder technische Gespräche ist E-Mail der beste Ausgangspunkt."
      : "For roles, project collaborations, or technical conversations, email is the best place to start.";
    const profileLabel = language === "de" ? "Berufliches Profil" : "Professional profile";
    const cvMeta = language === "de" ? "Berufserfahrung & Ausbildung" : "Experience & education";
    const cvText = language === "de" ? "Lebenslauf herunterladen (Deutsch)" : "Download CV (English)";
    const codeLabel = language === "de" ? "Code & Projekte" : "Code & projects";
    const copyText = language === "de" ? "E-Mail-Adresse kopieren" : "Copy email address";
    left = `<div class="running-head"><span>${contactLabel}</span></div><div class="section-profile contact-profile"><h1>${contactTitle}</h1><p>${contactCopy}</p><div class="section-profile-meta"><strong>${basedLabel}</strong><span>${basedCopy}</span></div></div>`;
    right = `<div class="contact-panel"><h2>${contactHeading}</h2><p class="section-deck">${contactDeck}</p><div class="contact-list"><a href="mailto:${email}"><span><small>Email</small><strong>${email}</strong></span>${icon("arrow-up-right")}</a><a href="${linkedin}" target="_blank" rel="noopener"><span><small>${profileLabel}</small><strong>LinkedIn / Punam Adhikari</strong></span>${icon("arrow-up-right")}</a><a href="/assets/Punam_cv.pdf" target="_blank" rel="noopener"><span><small>${cvMeta}</small><strong>${cvText}</strong></span>${icon("download")}</a><a href="${github}" target="_blank" rel="noopener"><span><small>${codeLabel}</small><strong>GitHub / Punam918</strong></span>${icon("arrow-up-right")}</a></div><button class="copy-button" id="copy-email" type="button">${icon("copy")}<span>${copyText}</span></button></div>`;
  }
  return `<section class="page page-left">${left}${pageFooter(index === 0 ? t.about.current : t.chapters[chapterIndex()], index * 2 + 1)}</section><section class="page page-right">${right}${pageFooter("Punam Adhikari", index * 2 + 2)}</section>`;
}

const themeLabels = {
  en: ['Night mode', 'Switch to night mode', 'Switch to light mode'],
  de: ['Nachtmodus', 'Zum Nachtmodus wechseln', 'Zum hellen Modus wechseln'],
};

function syncThemeControl() {
  const dark = document.documentElement.dataset.theme === 'dark';
  const button = document.querySelector('#theme-toggle');
  button.setAttribute('aria-pressed', String(dark));
  button.setAttribute('aria-label', themeLabels[language][0]);
  button.title = themeLabels[language][dark ? 2 : 1];
  button.innerHTML = icon(dark ? 'sun' : 'moon');
  document.querySelector('meta[name="theme-color"]').content = dark ? '#1c131f' : '#e7ece9';
}

document.querySelector('#theme-toggle').addEventListener('click', () => {
  const theme = document.documentElement.dataset.theme === 'dark' ? 'light' : 'dark';
  document.documentElement.dataset.theme = theme;
  syncThemeControl();
});

function render() {
  const t = editions[language];
  document.documentElement.lang = language;
  document.title = `Punam Adhikari | ${t.pageTitles[current]}`;
  document.querySelector('meta[name="description"]').content =
    `${t.about.lead} ${t.about.body[0]}`;
  document.querySelectorAll("[data-ui]").forEach((node) => {
    node.textContent = t.ui[node.dataset.ui];
  });
  document
    .querySelectorAll("[data-lang]")
    .forEach((button) =>
      button.setAttribute(
        "aria-pressed",
        String(button.dataset.lang === language),
      ),
    );
  document
    .querySelector(".languages")
    .setAttribute("aria-label", t.ui.language);
  document.querySelector(".cv-link").setAttribute("aria-label", t.ui.download);
  const nav = document.querySelector("#chapters");
  nav.setAttribute("aria-label", t.ui.chapters);
  nav.innerHTML = t.chapters
    .map(
      (label, i) =>
        `<button class="chapter" type="button" data-page="${chapterStarts[i]}" ${i === chapterIndex() ? 'aria-current="page"' : ""}><span>${String(i + 1).padStart(2, "0")}</span>${e(label)}</button>`,
    )
    .join("");
  spread.innerHTML = content();
  const cvPath = language === 'en' ? '/assets/Punam_cv.pdf' : `/assets/Punam_cv_${language}.pdf`;
  document.querySelectorAll('a[href^="/assets/Punam_cv"]').forEach(link => {
    link.href = cvPath;
    link.hreflang = language;
  });
  select.innerHTML = t.pageTitles
    .map(
      (title, i) =>
        `<option value="${i}" ${i === current ? "selected" : ""}>${String(i + 1).padStart(2, "0")} / ${routes.length} · ${e(title)}</option>`,
    )
    .join("");
  document.querySelector("#previous").disabled = current === 0;
  document.querySelector("#next").disabled = current === routes.length - 1;
  document.querySelector("#progress").style.width =
    `${((current + 1) / routes.length) * 100}%`;
  document.querySelector("#announcement").textContent =
    `${t.ui.page} ${current + 1} ${t.ui.of} ${routes.length}: ${t.pageTitles[current]}`;
  book.setAttribute("aria-label", t.pageTitles[current]);
  document.querySelector("#year").textContent = new Date().getFullYear();
  syncThemeControl();
  requestAnimationFrame(() => {
    const activeChapter = document.querySelector(".chapter[aria-current]");
    if (activeChapter) {
      const chapterNav = activeChapter.parentElement;
      chapterNav.scrollLeft = Math.max(
        0,
        activeChapter.offsetLeft -
          chapterNav.offsetLeft -
          (chapterNav.clientWidth - activeChapter.offsetWidth) / 2,
      );
    }
    syncChapterCue();
  });
}

function syncChapterCue() {
  const nav = document.querySelector("#chapters");
  const shell = document.querySelector(".chapters-shell");
  shell.classList.toggle("can-scroll", nav.scrollWidth > nav.clientWidth + 4);
  shell.classList.toggle("has-scrolled", nav.scrollLeft > 8);
}

function navigate(
  index,
  { animate = true, updateURL = true, focus = false } = {},
) {
  if (
    !Number.isInteger(index) ||
    index < 0 ||
    index >= routes.length ||
    index === current
  )
    return;
  if (leafAnimation) leafAnimation.cancel();
  document.querySelector(".turn-leaf")?.remove();
  const forward = index > current;
  const mobile = matchMedia("(max-width:700px)").matches;
  const source = mobile
    ? spread
    : spread.querySelector(forward ? ".page-right" : ".page-left");
  const leaf = source.cloneNode(true);
  const shouldAnimate =
    animate && !matchMedia("(prefers-reduced-motion:reduce)").matches;
  const needsScroll = book.getBoundingClientRect().top < -80;
  current = index;
  render();
  if (updateURL) history.pushState(null, "", `#${routes[current]}`);
  if (shouldAnimate) {
    // Animate an inert copy so the new page is immediately available to assistive technology.
    leaf.classList.add("turn-leaf");
    leaf.removeAttribute("id");
    leaf.querySelectorAll("[id]").forEach((node) => node.removeAttribute("id"));
    leaf.setAttribute("aria-hidden", "true");
    leaf.inert = true;
    leaf.style[forward ? "right" : "left"] = "0";
    leaf.style.transformOrigin = forward ? "left center" : "right center";
    book.appendChild(leaf);
    leafAnimation = leaf.animate(
      [
        { transform: "rotateY(0deg)", opacity: 1 },
        {
          transform: `rotateY(${forward ? -75 : 75}deg)`,
          opacity: 0.7,
          offset: 0.75,
        },
        { transform: `rotateY(${forward ? -105 : 105}deg)`, opacity: 0 },
      ],
      {
        duration: 550,
        easing: "cubic-bezier(.25,.65,.25,1)",
        fill: "forwards",
      },
    );
    leafAnimation.finished.then(() => leaf.remove()).catch(() => leaf.remove());
  }
  if (focus) book.focus({ preventScroll: true });
  if (needsScroll) book.scrollIntoView({ block: "start", behavior: "instant" });
  const active = document.querySelector(".chapter[aria-current]");
  if (active) {
    const nav = active.parentElement;
    nav.scrollLeft = Math.max(
      0,
      active.offsetLeft -
        nav.offsetLeft -
        (nav.clientWidth - active.offsetWidth) / 2,
    );
  }
}

document
  .querySelector("#previous")
  .addEventListener("click", () => navigate(current - 1, { focus: true }));
document
  .querySelector("#next")
  .addEventListener("click", () => navigate(current + 1, { focus: true }));
select.addEventListener("change", () =>
  navigate(Number(select.value), { focus: true }),
);
document.querySelector("#chapters").addEventListener("click", (event) => {
  const button = event.target.closest("[data-page]");
  if (button) navigate(Number(button.dataset.page), { focus: true });
});
document.querySelector("#chapters").addEventListener("scroll", syncChapterCue, { passive: true });
window.addEventListener("resize", syncChapterCue, { passive: true });
document.querySelector(".brand").addEventListener("click", (event) => {
  event.preventDefault();
  navigate(0, { focus: true });
});
document.querySelectorAll("[data-lang]").forEach((button) =>
  button.addEventListener("click", () => {
    language = button.dataset.lang;
    if (leafAnimation) leafAnimation.cancel();
    document.querySelector(".turn-leaf")?.remove();
    try {
      localStorage.setItem("punam-language", language);
    } catch (_) {}
    render();
  }),
);
window.addEventListener("popstate", () =>
  navigate(Math.max(0, routes.indexOf(location.hash.slice(1))), {
    updateURL: false,
  }),
);
window.addEventListener("hashchange", () => {
  const index = routes.indexOf(location.hash.slice(1));
  if (index !== -1) navigate(index, { updateURL: false });
});
document.addEventListener("keydown", (event) => {
  if (
    event.altKey ||
    event.ctrlKey ||
    event.metaKey ||
    event.shiftKey ||
    event.target.closest(
      'input,textarea,select,button,a,[contenteditable="true"]',
    )
  )
    return;
  const destination = {
    ArrowRight: current + 1,
    ArrowLeft: current - 1,
    Home: 0,
    End: routes.length - 1,
  }[event.key];
  if (destination !== undefined) {
    event.preventDefault();
    navigate(destination, { focus: true });
  }
});
book.addEventListener(
  "touchstart",
  (event) => {
    if (event.target.closest("a,button,select")) return;
    const touch = event.changedTouches[0];
    touchStart = { x: touch.clientX, y: touch.clientY, time: Date.now() };
  },
  { passive: true },
);
book.addEventListener(
  "touchend",
  (event) => {
    if (!touchStart) return;
    const touch = event.changedTouches[0];
    const dx = touch.clientX - touchStart.x;
    const dy = touch.clientY - touchStart.y;
    if (
      Math.abs(dx) > 75 &&
      Math.abs(dx) > Math.abs(dy) * 2 &&
      Date.now() - touchStart.time < 700
    )
      navigate(current + (dx < 0 ? 1 : -1));
    touchStart = null;
  },
  { passive: true },
);
book.addEventListener(
  "touchcancel",
  () => {
    touchStart = null;
  },
  { passive: true },
);
spread.addEventListener("click", async (event) => {
  const button = event.target.closest("#copy-email");
  if (!button) return;
  try {
    await navigator.clipboard.writeText(email);
    button.querySelector("span").textContent = editions[language].ui.copied;
    document.querySelector("#announcement").textContent =
      editions[language].ui.copied;
  } catch (_) {
    document.querySelector("#announcement").textContent =
      editions[language].ui.copyFailed;
    button.querySelector("span").textContent = editions[language].ui.copyFailed;
  }
});
render();
}
