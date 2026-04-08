// Markdown content mapping
// This file exports markdown content from src folder as strings

export const markdownContent = {
    './rust_coverage_perf.md': `## **Exploring Code Coverage Performance: Rust vs C++**

One question that comes up frequently among systems programmers is how *code coverage tooling* stacks up across languages — especially as Rust's ecosystem matures and tooling around testing and metrics becomes more important. Our **[rustlang-coverage-study](https://github.com/EngineeringSoftware/rustlang-coverage-study)** project sets out to answer a simple, concrete version of that question: *how much slower do tests run when coverage gathering is enabled?*

It focuses squarely on performance: measuring the **runtime overhead** introduced when running tests with coverage instrumentation enabled.

---

## **Why Coverage Performance Matters**

Before we dive into results, it's worth pausing on *why* this matters. Modern CI pipelines, local TDD workflows, and nightly regression testing all rely on reasonably fast test execution. Coverage tools — which track which lines of code are exercised during tests — are invaluable for understanding test quality, spotting dead code, and catching untested edge cases. But that insight comes at a cost: instrumentation slows down execution. Knowing how big that cost is (and how it compares between languages and tools) is practical information when you're choosing a workflow or designing CI infrastructure.

---

## **What the Benchmark Tests**

The rustlang-coverage-study repository contains a lightweight benchmarking script. It runs simple test workloads with varying sizes — 100, 1,000, and 10,000 tests — both with and without coverage enabled. Three tools are compared:

* **LLVM-based coverage for Rust**, invoked via tools like \`llvm-cov\`
* **[Tarpaulin](https://github.com/xd009642/tarpaulin)**, a Rust-specific coverage tool built on top of lower-level mechanisms
* **[gcov](https://gcc.gnu.org/onlinedocs/gcc/Gcov.html)**, the classic GNU coverage tool used for C++ programs

By running each configuration multiple times and averaging the results, the script captures a stable measurement of how long each test suite takes under coverage vs normal execution.

---

## **Performance Results**

Here's a high-level summary of what the benchmark reveals:

* **Rust with LLVM-based coverage** (e.g., via llvm-cov) introduces a measurable slowdown — especially in very small test suites.
* **Tarpaulin consistently shows higher overhead** than Rust's LLVM baseline across all workload sizes.
* **C++ with gcov is extremely fast without coverage**, and while it also slows down under coverage, its absolute times remain far lower than Rust test runs with coverage enabled.

For example, with a modest workload of 100 tests:

* Rust with LLVM coverage runs in roughly half a second, compared with about 0.26 seconds without coverage.
* Tarpaulin takes closer to 0.69 seconds under coverage.
* C++ with gcov clocks in near instantaneously — on the order of 2 milliseconds — though of course the scale of the workload is tiny relative to real projects.

As test counts grow to 10,000, coverage adds noticeable time, but the *relative* penalty drops — the coverage overhead becomes a smaller slice of the total execution time.

---

## **Putting It All Together**

* **Expect overhead** — especially if you're generating coverage on every push or commit. The native LLVM path tends to be lighter than Tarpaulin, but both slow down execution.
* **Smaller test suites experience more relative penalty**: the overhead is more dramatic when individual test runs are short. As workloads grow, the fixed costs of setting up coverage instrumentation get amortized over more work.
* **C++'s tooling remains lean**`,

'./welchia_worm.md': `## A Quick Detour: What the Welchia Worm Did

Before getting into my own work, it’s worth rewinding twenty years.

In the early 2000s, one of the most notorious Windows worms floating around was **Welchia** (also called *Nachi*). After exploiting RPC vulnerabilities to infect a machine, Welchia would aggressively send **ICMP echo requests** — basically pings — across networks to find other vulnerable hosts.

It was noisy. Entire subnets would suddenly be flooded with ICMP traffic. That flood *was* the signal: admins and intrusion-detection systems quickly learned that abnormal ping storms usually meant something ugly was spreading.

Welchia wasn’t subtle. ICMP was just a convenient tool for reconnaissance — a way to sweep the internet and map live machines.

And that’s exactly why it’s a useful starting point.

Because the work I’m describing here is built on the same protocol… but flips the goal completely.

---

## From Scanning With ICMP to Controlling Systems With It

The Welchia-style world used ICMP to *discover* victims.

My [proof-of-concept](https://github.com/1sand0s/Exploits-and-Malware/tree/master/ICMP_BACKDOOR_winpcap_exploit) implementation asks a different question:

> What if ICMP isn’t used to find machines —
> but to quietly control machines that are already compromised?

That shift — from loud scanning to low-and-slow command-and-control — is the core motivation behind this project.

Instead of blasting the network with pings, the attack model I explore is about embedding information inside ICMP packets in a way that blends into background traffic. The idea is to take advantage of three things that show up surprisingly often on real Windows systems:

1. Packet-capture drivers like Winpcap that are already running because tools such as Wireshark or GNS3 installed them.
2. The fact that ICMP echo replies are required to reflect whatever payload they were sent ([RFC 792](https://datatracker.ietf.org/doc/html/rfc792)).
3. Firewall and anti-malware rules that often make exceptions for ICMP traffic coming from a gateway router.

Individually, none of those are shocking. Together, they form a pretty clean path for a covert control channel.

---

## What I Actually Built

I focus on designing a new kind of **network covert channel** — specifically a modified *structured storage* channel inside ICMP.

Classic covert channels tend to rely on timing patterns: spacing packets carefully so that delays encode bits. That works, but it leaves statistical fingerprints. If traffic becomes too rhythmic, detectors can pick it up.

My approach instead hides symbols directly inside ICMP header fields — things like the Identifier and Sequence Number — so that:

* each packet can carry one or even two characters,
* the spacing between packets can be randomized,
* and the same word can be encoded hundreds of different ways.

That randomness is deliberate. The more degrees of freedom the attacker has, the harder it becomes to spot regularity.`
};
